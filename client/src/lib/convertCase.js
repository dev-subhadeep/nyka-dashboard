export const titleCase = (word) => {
  if (!word) return word

  const words = word.split(" ")
  const titleCaseWords = words.map(
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  )

  return titleCaseWords.join(" ")
}
