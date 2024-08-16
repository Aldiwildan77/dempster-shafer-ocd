import { SafeAreaView } from "@/components/SafeAreaView";
import {
  Button,
  Card,
  Text,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

export default function IndexTabScreen() {
  const theme = useTheme();
  const TakeTestHeader = () => {
    return (
      <View style={{ gap: 8 }}>
        <Text category="h4">Take a quick OCD Test</Text>
        <Text style={{ textAlign: "justify" }}>
          This test may help identify if you are suffering with OCD and to what
          degree. It is not meant to replace a full assessment by a qualified
          clinician and we would always recommend going to a qualified,
          experienced clinician if you have any concerns about your results or
          your health.
        </Text>
      </View>
    );
  };

  const TakeTestFooter = () => {
    return (
      <Button
        onPress={() => {
          // TODO: Navigate to the test page
        }}
      >
        Start Test
      </Button>
    );
  };

  return (
    <SafeAreaView>
      <TopNavigation title="OCD Test" />
      <View style={styles.container}>
        <Card
          header={TakeTestHeader}
          footer={TakeTestFooter}
          style={{
            padding: 16,
            borderStyle: "dashed",
            borderColor: theme["color-primary-default-border"],
            borderWidth: 1,
            borderRadius: 8,
          }}
        ></Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
