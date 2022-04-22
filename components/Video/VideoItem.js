import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Video } from "expo-av";

export default function VideoItem({ video }) {
  const { uri, caption, channelName, musicName, likes, comments, avatarUrl } =
    video;
  const [status, setStatus] = React.useState({});

  return (
    <View>
      <Video
        source={{ uri: uri }}
        style={styles.video}
        resizeMode="cover"
        isLooping
        useNativeControls
        shouldPlay
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: "100%",
  },
});
