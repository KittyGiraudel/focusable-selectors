'use strict'

module.exports = [
  'a[href]:not([tabindex^="-"])',
  'area[href]:not([tabindex^="-"])',
  'input:not([type="hidden"]):not([type="radio"]):not([disabled])',
  'input[type="radio"]:not([disabled]):checked',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe:not([tabindex^="-"])',
  'audio[controls]:not([tabindex^="-"])',
  'video[controls]:not([tabindex^="-"])',
  '[contenteditable]:not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])',
]
