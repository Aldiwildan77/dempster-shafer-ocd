import { Text } from "@ui-kitten/components";
import React from "react";
import { Image, Pressable, View } from "react-native";

export const HomeCard = ({
  title,
  description,
  image,
  onPress,
  color,
}: HomeCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <View
        style={{
          padding: 8,
          borderRadius: 16,
          backgroundColor: color,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "flex-start",
              width: "60%",
              textAlign: "justify",
            }}
          >
            {description}
          </Text>
          <Image
            source={image}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        <Text
          category="h6"
          style={{
            color: "white",
            paddingHorizontal: 16,
            paddingBottom: 8,
            alignSelf: "flex-start",
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

type HomeCardProps = {
  title: string;
  description: string;
  image: any;
  onPress: () => void;
  color?: string;
};
