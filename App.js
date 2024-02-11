import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native"
import { s } from "./App.style"
import hot from "./assets/hot.png"
import cold from "./assets/cold.png"
import { useCallback, useMemo, useState } from "react"
import {
  convert,
  getUnitToConvertTo,
  units,
  unitsRepresentation,
} from "./_utils"

export default function App() {
  const [currentUnit, setCurrentUnit] = useState("fahrenheit")
  const [inputValue, setInputValue] = useState("0")
  const bg = useMemo(() => {
    let isCold = false
    if (currentUnit === "centigrade") isCold = inputValue <= 32
    else isCold = inputValue <= 0
    return isCold ? cold : hot
  }, [currentUnit, inputValue])

  const handleInputChange = useCallback((val) => {
    setInputValue(val.trim().length > 0 ? val : 0)
  }, [])

  const toggleUnit = useCallback(() => {
    setCurrentUnit((prev) =>
      prev === "centigrade" ? "fahrenheit" : "centigrade"
    )
    setInputValue(0)
  }, [])

  return (
    <>
      <ImageBackground style={s.bg} source={bg}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            <Text style={s.temperature}>
              {convert(+inputValue || 0, currentUnit)}
              {unitsRepresentation[currentUnit]}
            </Text>
            <View style={s.inputBox}>
              <View>
                <TextInput
                  maxLength={3}
                  onChangeText={handleInputChange}
                  defaultValue={inputValue}
                  keyboardType="numeric"
                  placeholder="Enter temperature"
                  style={s.input}
                ></TextInput>
              </View>
              <Text style={s.indicator}>{units[currentUnit]}</Text>
            </View>
            <TouchableOpacity onPress={toggleUnit} style={s.button}>
              <Text style={s.buttonText}>
                Convert to {getUnitToConvertTo(currentUnit)}
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  )
}
