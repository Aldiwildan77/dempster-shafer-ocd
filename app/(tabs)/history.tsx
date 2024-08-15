import { TopNavigation } from "@ui-kitten/components";
import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HistoryTabScreen() {
  return (
    <Fragment>
      <TopNavigation title="History" />
      <View style={styles.container}>
        <Text>History page</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
