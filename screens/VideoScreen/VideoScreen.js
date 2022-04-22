import React from "react";
import { StyleSheet } from "react-native";
import VideoItem from "../../components/Video/VideoItem";
import { VideoData } from "../../data/videoData";

const VideoScreen = () => {
  return <VideoItem video={VideoData[0]} />;
};

export default VideoScreen;

const styles = StyleSheet.create({});
