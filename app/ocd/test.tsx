import { SafeAreaView } from "@/components/SafeAreaView";
import { OCD_QUESTIONS } from "@/constants/OcdQuestion";
import { Button, Card, Icon, ProgressBar, Text } from "@ui-kitten/components";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

type UserAnswerState = {
  [questionIndex: number]: UserAnswerIndex;
};
type UserAnswerIndex = number;

export default function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswerState>({});
  const isLastQuestion = currentIndex === OCD_QUESTIONS.length - 1;

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          gap: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            onPress={() => {
              // TODO: add confirmation dialog
              router.back();
            }}
            style={{
              width: 40,
              height: 40,
            }}
            name="close-outline"
          />
          <ProgressBar
            style={{
              flex: 1,
              marginHorizontal: 8,
            }}
            progress={currentIndex / OCD_QUESTIONS.length}
          />
        </View>

        <Text>{OCD_QUESTIONS[currentIndex].question}</Text>
        <View
          style={{
            gap: 16,
            marginTop: 16,
          }}
        >
          {OCD_QUESTIONS[currentIndex].answers.map((answer, index) => (
            <Card
              key={index}
              onPress={() => {
                setUserAnswer({
                  ...userAnswer,
                  [currentIndex]: index,
                });
              }}
              style={
                userAnswer[currentIndex] === index
                  ? styles.selectedCard
                  : undefined
              }
            >
              <Image
                src={answer.imageUrl}
                style={{
                  width: 200,
                  height: 200,
                  marginHorizontal: "auto",
                }}
              />
              <Text>{answer.answer}</Text>
            </Card>
          ))}
        </View>
        <Button
          onPress={() => {
            if (!isLastQuestion) {
              setCurrentIndex(currentIndex + 1);
            } else {
              // TODO: navigate to result page
              router.back();
            }
          }}
          style={{
            position: "absolute",
            bottom: 20,
            width: "100%",
          }}
        >
          {isLastQuestion ? "Selesai" : "Selanjutnya"}
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectedCard: {
    backgroundColor: "#f0f0f0",
  },
});
