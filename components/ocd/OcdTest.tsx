import { OCD_QUESTIONS } from "@/constants/OcdQuestion";
import { Button, Card, Text } from "@ui-kitten/components";
import { useState } from "react";
import { Image, View } from "react-native";

type UserAnswerState = {
  [questionIndex: number]: UserAnswerIndex;
};
type UserAnswerIndex = number;

type Props = {
  onFinish: () => void;
};

export function OcdTest(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswerState>({});
  const isLastQuestion = currentIndex === OCD_QUESTIONS.length - 1;

  return (
    <View
      style={{
        height: "100%",
        gap: 24,
      }}
    >
      <Text>{OCD_QUESTIONS[currentIndex].question}</Text>
      <View
        style={{
          gap: 16,
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
            props.onFinish();
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
  );
}
