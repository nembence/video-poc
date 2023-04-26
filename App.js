import { useRef, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Video from "react-native-video";

export default function App() {
  const video = useRef(null);

  const onPlay = () => video.current.presentFullscreenPlayer();

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        }}
        fullscreen
        resizeMode={"cover"}
        style={styles.backgroundVideo}
      />
      <TouchableOpacity onPress={onPlay}>
        <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

// https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/1336131408001/a691e6e3-f7f1-42e2-b00d-5d87dee5a0ac/10s/master.m3u8?fastly_token=NjQ0OTQ1MGZfMzdhOGYwZTY1MzRkZmI0MzY4MWI1MDQ3Zjk3YWJlY2EyMWI4YzQ0MDU5MGEyNmRmNjFmOWQwYTIxYTNmM2NlZg%3D%3D

// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundVideo: {
    height: 500,
    width: "100%",
  },
});
