'use strict'

const notInertNegativeTabindex = ':not([inert]):not([tabindex^="-"])'
const notInertNegativeTabIndexDisabled = `${notInertNegativeTabindex}:not([disabled])`

module.exports = [
  `a[href]${notInertNegativeTabindex}`,
  `area[href]${notInertNegativeTabindex}`,
  `input:not([type="hidden"]):not([type="radio"])${notInertNegativeTabIndexDisabled}`,
  `input[type="radio"]${notInertNegativeTabIndexDisabled}`,
  `select${notInertNegativeTabIndexDisabled}`,
  `textarea${notInertNegativeTabIndexDisabled}`,
  `button${notInertNegativeTabIndexDisabled}`,
  `iframe${notInertNegativeTabindex}`,
  `audio[controls]${notInertNegativeTabindex}`,
  `video[controls]${notInertNegativeTabindex}`,
  `[contenteditable]${notInertNegativeTabindex}`,
  `[tabindex]${notInertNegativeTabindex}`,
]
