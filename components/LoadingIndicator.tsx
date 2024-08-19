import { Spinner } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

export function LoadingIndicator() {
  return (
    <View style={styles.indicator}>
      <Spinner size="small" status="control" />
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});
