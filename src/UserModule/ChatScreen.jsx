import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors, sizes } from "../constants/theme";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { messages } from "../components/data";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import * as Sharing from "expo-sharing";
import * as ImagePicker from "expo-image-picker";

const ChatScreen = () => {
  const { fontScale } = useWindowDimensions();
  const [input, setinput] = useState("");
  const [shopSelect, setshopSelect] = useState(true);
  const [serviceSelect, setserviceSelect] = useState(false);
  const navigation = useNavigation();
  const [micCheck, setmicCheck] = useState(false);

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
        <>
          {index === 0 && (
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
          )}
        </>
      );
    });
  }
  const [image, setimage] = useState("");
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setimage(result.uri);
      console.log(result.uri);
    }
  };
  const handlePress = () => setmicCheck(!micCheck);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <TouchableOpacity
            style={{ marginRight: 8 }}
            onPress={() => navigation.goBack()}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/pf.png")}
              style={{
                height: 45,
                width: 45,
                borderRadius: 45 / 2,
              }}
            />
            <Text
              style={{
                fontWeight: sizes.bold,
                fontSize: 18 / fontScale,
                color: colors.textPrimary,
                marginLeft: 7.5,
              }}
            >
              Shopkeeper Name
            </Text>
          </View>
          <TouchableOpacity style={{ height: 24, width: 24 }} />
        </View>
        <View style={styles.headerButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              setserviceSelect(false);
              setshopSelect(true);
            }}
            style={[
              styles.headerButton,
              {
                borderColor: shopSelect ? colors.primary : colors.borderColor,
                elevation: shopSelect ? 5 : 0,
              },
            ]}
          >
            <Text
              style={[
                styles.headerButtonText,
                {
                  color: shopSelect ? colors.primary : colors.textPrimary,
                  fontSize: 12 / fontScale,
                },
              ]}
            >
              Place Order
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setserviceSelect(true);
              setshopSelect(false);
              navigation.navigate("MapScreen");
            }}
            style={[
              styles.headerButton,
              {
                borderColor: serviceSelect
                  ? colors.primary
                  : colors.borderColor,
                elevation: serviceSelect ? 5 : 0,
              },
            ]}
          >
            <Text
              style={[
                styles.headerButtonText,
                {
                  color: serviceSelect ? colors.primary : colors.textPrimary,
                  fontSize: 12 / fontScale,
                },
              ]}
            >
              Use another store
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate("Test")}
            onPress={() => navigation.goBack()}
            style={[
              styles.headerButton,
              {
                borderColor: "red",
                elevation: 5,
              },
            ]}
          >
            <Text
              style={[
                styles.headerButtonText,
                {
                  color: "red",
                  fontSize: 12 / fontScale,
                },
              ]}
            >
              Leave Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.urduTextContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.urduText}>
          یہ اردو میں کچھ جملہ ہے۔یہ اردو میں کچھ جملہ ہے۔یہ اردو میں کچھ جملہ
          ہے۔یہ اردو میں کچھ جملہ ہے۔ یہ اردو میں کچھ جملہ ہے۔
        </Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView style={{}}>
              <View style={styles.reciever}>
                <Text style={styles.recieverText}>
                  Hey, do you have home applience things!
                </Text>
              </View>

              <View style={styles.sender}>
                <Text style={styles.senderText}>
                  Sorry, sir! we’re just dealing with wood repairing & home
                  spare parts.{" "}
                </Text>
              </View>
            </ScrollView>
            <View style={styles.footer}>
              {image === "" && (
                <TouchableOpacity
                  onPress={() => {
                    recording ? stopRecording() : startRecording();
                    handlePress();
                  }}
                  style={{ marginRight: 5 }}
                >
                  <Ionicons
                    name={recording ? "trash" : "mic"}
                    size={24}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              )}
              {micCheck ? (
                <View
                  style={{
                    bottom: 0,
                    height: 40,
                    flex: 1,
                    backgroundColor: colors.grey2,
                    paddingHorizontal: 10,
                    marginRight: 15,
                    flexDirection: "row",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",

                    // bottom: 0,
                    // height: 40,
                    // flex: 1,
                    // backgroundColor: colors.grey2,
                    // padding: 10,
                    // paddingLeft: 20,
                    // color: "grey",
                    // borderRadius: 30,
                  }}
                >
                  {/* <TouchableOpacity
                    style={{ paddingLeft: 20 }}
                    onPress={recording ? stopRecording : startRecording}
                  >
                    <Ionicons name={recording ? "trash" : "mic"} size={24} />
                  </TouchableOpacity> */}
                  {getRecordingLines()}
                </View>
              ) : (
                <>
                  {image !== "" ? (
                    <View style={{ flex: 1 }}>
                      <Image
                        source={{ uri: image }}
                        style={{
                          width: "90%",
                          height: 150,
                          resizeMode: "contain",
                          marginRight: 0,
                          marginVertical: 10,
                        }}
                      />
                      <TouchableOpacity
                        style={{ position: "absolute", top: 30, right: 60 }}
                        onPress={() => setimage("")}
                      >
                        <MaterialIcons
                          name="close"
                          size={18}
                          color={colors.textPrimary}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <>
                      <View style={styles.textInput}>
                        <TextInput
                          value={input}
                          onChangeText={(text) => setinput(text)}
                          placeholder="Send Message"
                          style={{
                            width: "85%",
                          }}
                        />
                        <TouchableOpacity
                          style={{
                            height: 24,
                            width: 24,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onPress={showImagePicker}
                        >
                          <Ionicons
                            name="add"
                            size={24}
                            color={colors.textPrimary}
                          />
                        </TouchableOpacity>
                      </View>
                    </>
                  )}
                </>
              )}
              <TouchableOpacity>
                <Ionicons name="send" size={24} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  reciever: {
    padding: 15,
    backgroundColor: colors.grey2,
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  recieverText: {
    color: "black",
    fontWeight: sizes.semiBold,
    marginLeft: 10,
  },
  sender: {
    padding: 15,
    backgroundColor: colors.primary,
    alignSelf: "flex-start",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
    marginBottom: 20,
  },
  senderText: {
    color: colors.white,
    fontWeight: sizes.semiBold,
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    // flex: 1,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: colors.grey2,
    padding: 10,
    paddingLeft: 20,
    color: "grey",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "white",
    height: "20%",
    alignItems: "center",
  },
  headerTitle: {
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 10,
    paddingHorizontal: 14,
    height: 55,
    alignItems: "center",
  },
  headerButton: {
    backgroundColor: colors.white,
    width: "33%",
    padding: 10,
    height: "100%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
  headerButtonText: {
    fontWeight: sizes.semiBold,
  },
  urduTextContainer: {
    // width: "100%",
    height: 40,
    marginVertical: 5,
    backgroundColor: "lightgrey",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 14,
    paddingHorizontal: 5,
  },
  urduText: {
    fontSize: 14,
    fontWeight: sizes.semiBold,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  fill: {
    flex: 1,
    marginHorizontal: 10,
  },
  button: {
    marginHorizontal: 10,
  },
});
