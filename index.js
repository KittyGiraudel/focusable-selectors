'use strict'

module.exports = [
  'a[href]:not([tabindex^="-"])',
  'area[href]:not([tabindex^="-"])',
  'input:not([type="hidden"]):not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe:not([tabindex^="-"])',
  'audio[controls]:not([tabindex^="-"])',
  'video[controls]:not([tabindex^="-"])',
  '[contenteditable]:not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])',
]
