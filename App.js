import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.illusionTop}>
          <View style={styles.topBoxContainer}>
            <View style={styles.topBox}>
              <View style={styles.innerBox}></View>
              <View style={styles.topText}>
                <Text style={styles.text}>Name</Text>
              </View>
              <View style={styles.innerBox}></View>
            </View>
          </View>
        </View>
        <View style={styles.illusionBottom}>
          <View style={styles.bottomBoxContainer}>
            <View style={styles.bottomBox}>
              <View>
                <Text style={styles.text}>Balance</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1c22",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 80,
    overflow: "hidden",
  },
  illusionTop: {
    backgroundColor: "#f4f5fb",
  },
  topBoxContainer: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
  },
  illusionBottom: {
    backgroundColor: "#fff",
  },
  bottomBoxContainer: {
    backgroundColor: "#f4f5fb",
    borderTopRightRadius: 30,
  },
  topBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 25,
    paddingBottom: 25,
  },
  bottomBox: {
    paddingTop: 25,
    paddingBottom: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f5fb",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 30,
  },
  innerBox: {
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: "#0f1c22",
  },
  topText: {
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
  },
});
