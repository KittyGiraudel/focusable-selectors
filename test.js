const { describe, it } = require('node:test')
const { strict: assert } = require('node:assert')
const focusableSelectors = require('./')

const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const re = string => new RegExp(escapeRegExp(string))

describe('<a> elements', () => {
  const selector = focusableSelectors.find(
    selector => selector.startsWith('a') && !selector.startsWith('area')
  )

  it('should only include elements with [href]', () => {
    assert.match(selector, re('[href]'))
    assert.doesNotMatch(selector, re(':not([href])'))
  })

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})

describe('<area> elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('area')
  )

  it('should only include elements with [href]', () => {
    assert.match(selector, re('[href]'))
    assert.doesNotMatch(selector, re(':not([href])'))
  })

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})

describe('<input> (non-radio) elements', () => {
  const selector = focusableSelectors.find(
    selector =>
      selector.startsWith('input') &&
      !selector.startsWith('input[type="radio"]')
  )

  it('should only include non-radio elements', () => {
    assert.match(selector, re(':not([type="radio"])'))
  })

  it('should only include non-hidden elements', () => {
    assert.match(selector, re(':not([type="hidden"])'))
  })

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })

  it('should only include elements not [disabled]', () => {
    assert.match(selector, re(':not([disabled])'))
  })
})

describe('<input> (radio) elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('input[type="radio"]')
  )

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })

  it('should only include elements not [disabled]', () => {
    assert.match(selector, re(':not([disabled])'))
  })
})

describe('<textarea> elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('textarea')
  )

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })

  it('should only include elements not [disabled]', () => {
    assert.match(selector, re(':not([disabled])'))
  })
})

describe('<button> elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('button')
  )

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })

  it('should only include elements not [disabled]', () => {
    assert.match(selector, re(':not([disabled])'))
  })
})

describe('<iframe> elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('iframe')
  )

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})

describe('<audio> elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('audio')
  )

  it('should only include elements with [controls]', () => {
    assert.match(selector, re('[controls]'))
    assert.doesNotMatch(selector, re(':not([controls])'))
  })

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})

describe('<video> elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('video')
  )

  it('should only include elements with [controls]', () => {
    assert.match(selector, re('[controls]'))
    assert.doesNotMatch(selector, re(':not([controls])'))
  })

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})

describe('[contenteditable] elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('[contenteditable]')
  )

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})

describe('[tabindex] elements', () => {
  const selector = focusableSelectors.find(selector =>
    selector.startsWith('[tabindex]')
  )

  it('should only include elements without [inert]', () => {
    assert.match(selector, re(':not([inert])'))
  })

  it('should only include elements without negative [tabindex]', () => {
    assert.match(selector, re(':not([tabindex^="-"])'))
  })
})
