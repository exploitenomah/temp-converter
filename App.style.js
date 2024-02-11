import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 0.6,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 100
  },
  bg: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    minWidth: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    borderRadius: 30
  },
  button: {
    backgroundColor: "black",
    fontSize: 30,
    width: 180,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    fontWeight: "bold"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  temperature: {
    fontSize: 70,
    color: "white"
  },
  indicator: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  inputBox: {
    justifyContent: "center" 
  },
});
