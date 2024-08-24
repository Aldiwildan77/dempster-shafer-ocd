import { SafeAreaView } from "@/components/SafeAreaView";
import { AnswerCollection } from "@/core/entity/answers";
import { Histories, History } from "@/core/entity/history";
import { useUserStore } from "@/hooks/useUser";
import { precision } from "@/utils/number";
import firestore from "@react-native-firebase/firestore";
import { Text, TopNavigation, useTheme } from "@ui-kitten/components";
import { toast } from "burnt";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function HistoryTabScreen() {
  const theme = useTheme();
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
          created_at: docData.created_at?.toDate(),
          finished_at: docData.finished_at?.toDate(),
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
    <Pressable
      onPress={() =>
        router.push({
          pathname: "/ocd/result/[id]",
          params: {
            id: item.doc_id,
          },
        })
      }
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? theme["background-basic-color-3"]
            : theme["background-basic-color-1"],
          flex: 1,
          paddingHorizontal: 8,
        },
      ]}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingVertical: 16,
          borderBottomWidth: 1,
          borderBottomColor: theme["border-basic-color-4"],
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Text category="h6">
            Jumlah Predikat OCD: {item.predicate?.split(",").length || 0}
          </Text>
          <Text>Skor anda: {precision(item.score)}%</Text>
          <Text category="c1">
            Dilakukan pada: {item.created_at.toLocaleString()}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  if (loading) {
    return (
      <SafeAreaView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
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
          style={{
            ...styles.listContainer,
            backgroundColor: theme["background-basic-color-1"],
          }}
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
  },
});
