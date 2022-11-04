import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
import * as Sharing from "expo-sharing";
import React from "react";
import { colors } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const Test = () => {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => recordingLine.sound.replayAsync()}
          >
            <Ionicons name="play" size={24} color={colors.primary} />
          </TouchableOpacity>

          <Text style={styles.fill}>Recording {index + 1} </Text>

          <Text style={{}}>{recordingLine.duration}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Sharing.shareAsync(recordingLine.file)}
          >
            <Ionicons name="share" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      );
    });
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          bottom: 0,
          height: 60,
          width: "90%",
          // marginRight: 15,
          backgroundColor: colors.grey2,
          paddingHorizontal: 10,
          //
          flexDirection: "row",
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ paddingLeft: 20 }}
          onPress={recording ? stopRecording : startRecording}
        >
          <Ionicons name={recording ? "trash" : "mic"} size={24} />
          {/* <Text>{recording ? "Stop Recording" : "Start Recording"}</Text> */}
        </TouchableOpacity>
        {getRecordingLines()}
      </View>
      {/* <View
        style={{
          bottom: 0,
          height: 40,
          width: "100%",
          marginRight: 15,
          backgroundColor: colors.grey2,
          // padding: 10,
          paddingLeft: 20,
          flexDirection: "row",
          borderRadius: 30,
          justifyContent: "center",
        }}
      >
        {/* <Text>{message}</Text> */}
      {/* <TouchableOpacity
        style={{}}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text>{recording ? "Stop Recording" : "Start Recording"}</Text>
      </TouchableOpacity> */}
      {/* <Button
                    title={recording ? "Stop Recording" : "Start Recording"}
                    onPress={recording ? stopRecording : startRecording}
                  /> */}
      {/* {getRecordingLines()} */}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "90%",
  },
  fill: {
    flex: 1,
    margin: 16,
  },
  button: {
    margin: 16,
  },
});
