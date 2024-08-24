import { ConfirmationModal } from "@/components/ConfirmationModal";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { SafeAreaView } from "@/components/SafeAreaView";
import { AnswerCollection, UserAnswer } from "@/core/entity/answers";
import { OCD_QUESTIONS, OCDAnswer } from "@/core/entity/dempster-shafer";
import {
  combineEvidenceAndHypothesis,
  combineHypothesis,
  getCalculableHypothesisOfRules,
  selectEvidenceByRules,
} from "@/core/module/dempster-shafer";
import { useUserStore } from "@/hooks/useUser";
import firestore from "@react-native-firebase/firestore";
import {
  Button,
  Card,
  Icon,
  ProgressBar,
  Text,
  useTheme,
} from "@ui-kitten/components";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

type UserAnswerState = {
  [index: number]: UserAnswer;
};

export default function TestScreen() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswerState>({});
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);
  const [isSaveModalVisible, setIsSaveModalVisible] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [createdAt] = useState(new Date());

  const isLastQuestion = currentIndex === OCD_QUESTIONS.length - 1;

  const user = useUserStore((state) => state.user);

  const convertUserAnswerStateToUserAnswers = (
    userAnswerState: UserAnswerState
  ): UserAnswer[] => {
    return Object.values(userAnswerState);
  };

  const handleExitConfirmation = () => {
    setIsExitModalVisible(true);
    router.back();
  };

  const handleExitConfirmationCancel = () => {
    setIsExitModalVisible(false);
  };

  const handleSaveConfirmationCancel = () => {
    setIsSaveModalVisible(false);
  };

  const handleSaveConfirmation = async () => {
    setIsSaveModalVisible(false);
    setIsSubmitLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const answersConverted = convertUserAnswerStateToUserAnswers(userAnswer);
      const selectedEvidence = answersConverted
        .filter((answer) => answer.point === 1)
        .map((answer) => answer.serial);

      const selectedRules = getCalculableHypothesisOfRules(
        selectEvidenceByRules(selectedEvidence)
      );

      const combinedHypothesisResult = combineHypothesis(
        selectedEvidence,
        selectedRules
      );

      const result = combineEvidenceAndHypothesis(combinedHypothesisResult);

      const finishedAt = new Date();
      const score = result.max === -1 ? 0 : result.max * 100;

      const response = await firestore().collection(AnswerCollection).add({
        created_at: createdAt,
        finished_at: finishedAt,
        user_id: user?.uid,
        predicate: result.hypothesis,
        score: score,
        answers: answersConverted,
      });

      if (!response || !response.id) {
        throw new Error("Failed to submit answer");
      }

      router.replace({
        pathname: "/ocd/result/[id]",
        params: {
          id: response.id,
        },
      });
    } catch (error) {
      console.error("Failed to submit answer: ", error);
    }
    setIsSubmitLoading(false);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.progressBarContainer}>
            <Icon
              onPress={() => setIsExitModalVisible(true)}
              style={{
                width: 25,
                height: 25,
              }}
              name="close-outline"
              pack="eva"
            />
            <ProgressBar
              style={{
                flex: 1,
                marginHorizontal: 8,
              }}
              progress={currentIndex / OCD_QUESTIONS.length}
            />
          </View>

          <Text category="h6">{OCD_QUESTIONS[currentIndex].question}</Text>
          <View style={styles.answerContainer}>
            {OCD_QUESTIONS[currentIndex].answers?.map(
              (answer: OCDAnswer, index: number) => (
                <Card
                  key={index}
                  onPress={() => {
                    setUserAnswer({
                      ...userAnswer,
                      [currentIndex]: {
                        serial: OCD_QUESTIONS[currentIndex].question_serial,
                        point: answer.point,
                      },
                    });
                  }}
                  style={{
                    backgroundColor:
                      userAnswer[currentIndex]?.point === answer.point
                        ? theme["background-basic-color-3"]
                        : theme["background-basic-color-1"],
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      gap: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>{answer.answer}</Text>
                  </View>
                </Card>
              )
            )}
          </View>
        </View>
        <View style={styles.footer}>
          {currentIndex > 0 && (
            <Button
              onPress={() => {
                if (currentIndex > 0) {
                  setCurrentIndex(currentIndex - 1);
                }
              }}
              style={{ flex: 1, borderRadius: 8 }}
              appearance="outline"
              disabled={isSubmitLoading ? true : false}
            >
              Sebelumnya
            </Button>
          )}
          <Button
            onPress={() => {
              if (!isLastQuestion) {
                setCurrentIndex(currentIndex + 1);
                return;
              }

              setIsSaveModalVisible(true);
            }}
            style={{ flex: 1, borderRadius: 8 }}
            disabled={
              userAnswer[currentIndex] === undefined || isSubmitLoading
                ? true
                : false
            }
            accessoryLeft={isSubmitLoading ? LoadingIndicator : undefined}
          >
            {isLastQuestion ? "Selesai" : "Selanjutnya"}
          </Button>
        </View>
      </View>
      <ConfirmationModal
        onCancel={handleExitConfirmationCancel}
        onConfirm={handleExitConfirmation}
        visible={isExitModalVisible}
        title="Apakah kamu yakin ingin keluar dari tes?"
      />
      <ConfirmationModal
        onCancel={handleSaveConfirmationCancel}
        onConfirm={handleSaveConfirmation}
        visible={isSaveModalVisible}
        title="Apakah kamu yakin ingin menyelesaikan tes?"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    gap: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    gap: 32,
  },
  footer: {
    width: "100%",
    gap: 8,
    flexDirection: "row",
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  answerContainer: {
    gap: 8,
  },
});
