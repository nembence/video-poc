import { Icon } from "@rneui/themed";
import { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function App() {
  const video = useRef(null);
  const video2 = useRef(null);
  const [opened, setOpened] = useState(false);

  const onPlay = async () => {
    await video.current.presentFullscreenPlayer();
    setOpened(true);
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
          <Image
            style={styles.videoPlayer}
            source={require("./assets/cover-image.png")}
          />
          <Video
            ref={video}
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            }}
            resizeMode={ResizeMode.COVER}
            style={styles.backgroundVideo1}
            isMuted
            shouldPlay={opened}
          />
          <TouchableOpacity onPress={onPlay} style={styles.iconContainer}>
            <Icon name="play-circle-fill" color="white" size={60} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtile}>Repeated video in background</Text>
        </View>
        <View style={styles.videoPlayer}>
          <Video
            ref={video2}
            source={{
              uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            }}
            isLooping
            resizeMode={ResizeMode.COVER}
            style={styles.backgroundVideo}
            rate={1}
            isMuted
            shouldPlay
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
    marginTop: Platform.OS === "ios" ? 80 : 20,
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
  backgroundVideo1: {
    height: 0,
    width: 0,
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
