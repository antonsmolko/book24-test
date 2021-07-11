export const highlightingTextByValue = (text, value) => {
  const trimValue = value.trim()

  if (!trimValue) {
    return text
  }

  const replaceValue = `<b>${trimValue}</b>`
  const regexp = new RegExp(trimValue, 'i')

  return `<span>${text.replace(regexp, replaceValue)}</span>`
}

export const arrowNavigate = ({ parentSelector, itemSelector, currentIndex, smartLinkSelector, callback = null }) => {
  const keyMap = {
    40: 'down',
    38: 'up',
    13: 'enter'
  }

  if (event.isComposing || event.keyCode === 229 || !keyMap[event.keyCode] || (event.keyCode === 13 && currentIndex === -1)) {
    return
  }

  const parentNode = document.querySelector(parentSelector)
  const itemNodes = parentNode.querySelectorAll(itemSelector)
  const items = Array.from(itemNodes)

  if (event.keyCode === 13) {
    const targetItem = items[currentIndex]
    const smartLink = targetItem.querySelector(smartLinkSelector)
    smartLink.click()

    return
  }

  const direction = keyMap[event.keyCode]

  const setHoveredByIndex = (index) => {
    items.forEach((item) => item.classList.remove('_hovered'))
    items[index].classList.add('_hovered')
  }

  const getNextIndex = (current, direction) => {
    const last = items.length - 1
    const mapping = {
      'up': current > 0 ? current - 1 : last,
      'down': current < last ? current + 1 : 0,
    }

    return mapping[direction]
  }

  const getInitialIndex = (direction) => direction === 'up' ? items.length - 1 : 0

  const nextIndex = currentIndex === -1
    ? getInitialIndex(direction)
    : getNextIndex(currentIndex, direction)

  setHoveredByIndex(nextIndex)

  if (callback) {
    callback(nextIndex)
  }
}
