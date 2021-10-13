function getColors(color) {
  const colorMap = {
    red: [255, 0, 0],
    green: [0, 255, 0],
    black: [0, 0, 0]
  }

  return colorMap[color] || colorMap["green"]
}
