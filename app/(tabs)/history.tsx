import {
  Button,
  Icon,
  IconElement,
  IconProps,
  List,
  ListItem,
  TopNavigation,
} from "@ui-kitten/components";
import { Fragment } from "react";
import { StyleSheet, View } from "react-native";

interface IListHistory {
  title: string;
  description: string;
}

const data = new Array(8).fill({
  title: "Your OCD Test Result",
  description: "TODO: Tanggal Here",
});

export default function HistoryTabScreen() {
  // TODO: bind data from firestore

  const renderItemAccessory = (): React.ReactElement => (
    <Button size="tiny">Check</Button>
  );

  const renderItemIcon = (props: IconProps): IconElement => (
    <Icon {...props} name="person" />
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: IListHistory;
    index: number;
  }): React.ReactElement => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <Fragment>
      <TopNavigation title="History" />
      <View style={styles.container}>
        <List
          style={styles.listContainer}
          data={data}
          renderItem={renderItem}
        />
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
  listContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
