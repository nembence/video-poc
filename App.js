import { Icon } from "@rneui/themed";
import { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import Video from "react-native-video";

export default function App() {
  const video = useRef(null);
  const [paused, setPaused] = useState(true);

  const onPlay = () => {
    setPaused(false);
    setTimeout(() => video.current.presentFullscreenPlayer(), 50);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>Video PoC</Text>
        </View>
        <View>
          <Text style={styles.subtile}>Video with player icon</Text>
        </View>
        <View style={styles.videoPlayer}>
          {paused ? (
            <Image
              style={styles.videoPlayer}
              source={require("./assets/cover-image.png")}
            />
          ) : (
            <Video
              ref={video}
              source={{
                uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              }}
              resizeMode={"cover"}
              style={styles.backgroundVideo}
              onFullscreenPlayerWillDismiss={() => {
                setPaused(true);
              }}
              muted
              fullscreen
              paused={paused}
            />
          )}

          <TouchableOpacity onPress={onPlay} style={styles.iconContainer}>
            <Icon name="play-circle-fill" color="white" size={60} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtile}>Repeated video in background</Text>
        </View>
        <View style={styles.videoPlayer}>
          <Video
            ref={video}
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            }}
            fullscreen
            repeat
            resizeMode={"cover"}
            style={styles.backgroundVideo}
            rate={1}
            paused={false}
            muted
            playInBackground={true}
          />
          <View style={styles.videoTitleContainer}>
            <Text style={styles.videoTitle}>Stage 1: Baseline</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 80,
  },
  subtile: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  iconContainer: {
    position: "absolute",
    top: "45%",
    left: "45%",
  },
  icon: {
    width: 100,
    height: 100,
  },

  videoPlayer: {
    position: "relative",
    width: "100%",
    height: 500,
  },
  backgroundVideo: {
    height: 500,
    width: "100%",
  },
  videoTitleContainer: {
    position: "absolute",
    top: 30,
    left: 20,
  },
  videoTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
