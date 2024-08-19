import { SafeAreaView } from "@/components/SafeAreaView";
import { AnswerCollection } from "@/core/entity/answers";
import { useUserStore } from "@/hooks/useUser";
import firestore from "@react-native-firebase/firestore";
import {
  Button,
  Icon,
  IconElement,
  IconProps,
  ListItem,
  TopNavigation,
} from "@ui-kitten/components";
import { toast } from "burnt";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native";

interface IListHistory {
  score: number;
  predicate: string;
  created_at: Date;
  finished_at: Date;
}

export default function HistoryTabScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [history, setHistory] = useState<IListHistory[]>([]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchHistory();
    setTimeout(() => setRefreshing(false), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = useUserStore((state) => state.user);

  const fetchHistory = async () => {
    try {
      const snapshot = await firestore()
        .collection(AnswerCollection)
        .where("user_id", "==", user?.uid)
        .orderBy("created_at", "desc")
        .get();
      const data = snapshot.docs.map((doc) => doc.data());

      const historyData = data.map((item) => ({
        score: item.score,
        predicate: item.predicate,
        created_at: item.created_at.toDate(),
        finished_at: item.finished_at.toDate(),
      }));

      setHistory(historyData);
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to fetch history", preset: "error" });
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItemAccessory = (): React.ReactElement => (
    <Button
      size="tiny"
      onPress={() => {
        router.push("/ocd/result");
      }}
    >
      Check
    </Button>
  );

  const renderItemIcon = (props: IconProps): IconElement => (
    <Icon {...props} name="calendar" />
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: IListHistory;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={"Your OCD Test Result"}
      description={`${item.score} - ${item.predicate}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <SafeAreaView>
      <TopNavigation title="History" />
      <ScrollView
        horizontal={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          style={styles.listContainer}
          data={history}
          renderItem={renderItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
