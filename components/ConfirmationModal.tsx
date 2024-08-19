import { Button, Card, Modal, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

type Props = {
  title: string;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmationModal = ({
  title,
  visible,
  onConfirm,
  onCancel,
}: Props) => {
  return (
    <Modal visible={visible} backdropStyle={styles.backdrop}>
      <Card disabled={true} style={{ borderRadius: 8 }}>
        <View style={styles.container}>
          <Text>{title}</Text>
          <View style={styles.footer}>
            <Button
              onPress={onConfirm}
              appearance="filled"
              size="small"
              style={{
                borderRadius: 40,
              }}
            >
              Ya
            </Button>
            <Button
              onPress={onCancel}
              appearance="outline"
              size="small"
              style={{
                borderRadius: 40,
              }}
            >
              Tidak
            </Button>
          </View>
        </View>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  footer: {
    flexDirection: "row-reverse",
    gap: 8,
  },
});
