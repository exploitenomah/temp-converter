export const unitsRepresentation = {
  centigrade: "°C",
  fahrenheit: "°F",
}
export const units = {
  centigrade: "°F",
  fahrenheit: "°C",
}
export function getUnitToConvertTo(unit) {
  return units[unit]
}
export function convert(temp, unitTo) {
  if (typeof temp !== "number") throw new Error("Temperature must be a number")
  if (unitTo === "fahrenheit") {
    return ((9/5 * temp) + 32).toFixed(1)
  } else if (unitTo === "centigrade") {
    return ((5 / 9) * (temp - 32)).toFixed(1)
  } else {
    throw new Error("Invalid unit")
  }
}
