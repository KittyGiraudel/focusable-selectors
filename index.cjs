'use strict'

const notInert = ':not([inert]):not([inert] *)'
const notNegTabIndex = ':not([tabindex^="-"])'
const notDisabled = ':not(:disabled)'

module.exports = [
  `a[href]${notInert}${notNegTabIndex}`,
  `area[href]${notInert}${notNegTabIndex}`,
  `input:not([type="hidden"]):not([type="radio"])${notInert}${notNegTabIndex}${notDisabled}`,
  `input[type="radio"]${notInert}${notNegTabIndex}${notDisabled}`,
  `select${notInert}${notNegTabIndex}${notDisabled}`,
  `textarea${notInert}${notNegTabIndex}${notDisabled}`,
  `button${notInert}${notNegTabIndex}${notDisabled}`,
  `details${notInert} > summary:first-of-type${notNegTabIndex}`,
  // Discard until Firefox supports `:has()`
  // See: https://github.com/KittyGiraudel/focusable-selectors/issues/12
  // `details:not(:has(> summary))${notInert}${notNegTabIndex}`,
  `iframe${notInert}${notNegTabIndex}`,
  `audio[controls]${notInert}${notNegTabIndex}`,
  `video[controls]${notInert}${notNegTabIndex}`,
  `[contenteditable]${notInert}${notNegTabIndex}`,
  `[tabindex]${notInert}${notNegTabIndex}`,
]
