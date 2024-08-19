import { SafeAreaView } from "@/components/SafeAreaView";
import { AnswerCollection } from "@/core/entity/answers";
import { Histories, History } from "@/core/entity/history";
import { useUserStore } from "@/hooks/useUser";
import firestore from "@react-native-firebase/firestore";
import { Button, Text, TopNavigation } from "@ui-kitten/components";
import { toast } from "burnt";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function HistoryTabScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [history, setHistory] = useState<Histories>([]);

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

      const data = snapshot.docs.map((doc) => {
        const docData = doc.data();
        return {
          doc_id: doc.id,
          score: docData.score,
          predicate: docData.predicate,
          created_at: docData.created_at.toDate(),
          finished_at: docData.finished_at.toDate(),
        };
      });

      setHistory(data);
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to fetch history", preset: "error" });
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({
    item,
    index,
  }: {
    item: History;
    index: number;
  }): React.ReactElement => (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 16,
      }}
    >
      {/* <Icon name="calendar" /> */}
      <View style={{ justifyContent: "flex-start", flexDirection: "column" }}>
        <Text>Your OCD Test Result</Text>
        <Text>{`${item.score} - ${item.predicate}`}</Text>
      </View>
      <View style={{ justifyContent: "center", flexDirection: "column" }}>
        <Button
          size="tiny"
          onPress={() => {
            router.push({
              pathname: "/ocd/result/[id]",
              params: {
                id: item.doc_id,
              },
            });
          }}
        >
          Check
        </Button>
      </View>
    </View>
  );

  if (loading) {
    return <ActivityIndicator />;
  }

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
