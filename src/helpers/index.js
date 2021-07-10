export const highlightingTextByValue = (text, value) => {
  const trimValue = value.trim()

  if (!trimValue) {
    return text
  }

  const replaceValue = `<b>${trimValue}</b>`
  const regexp = new RegExp(trimValue, 'i')

  return `<span>${text.replace(regexp, replaceValue)}</span>`
}
