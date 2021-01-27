import * as React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");
export default function VideoPlayerScreen() {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.Video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Video: {
    width: width,
    height: height / 3,
  },
});
