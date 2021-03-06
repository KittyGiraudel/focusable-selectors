# Focusable Selectors

`focusable-selectors` is a micro-lib exporting an array of CSS selectors for focusable HTML elements. Figuring out which element can be focused is not always trivial and is sometimes necessary to build fully accessible widgets such as [a11y-dialog](https://github.com/edenspiekermann/a11y-dialog).

It supports:

- All natively focusable elements,
- … and any element with the `contenteditable` attribute,
- … provided they do not have the `disabled` attribute (if they even can),
- … and do not have a negative `tabindex` attribute.

For a more advanced solution using JavaScript and covering more edge cases, refer to [focus-trap/tabbable](https://github.com/focus-trap/tabbable).

## Usage

```sh
npm install --save focusable-selectors
```

```js
const selectors = require('focusable-selectors')
```

To have a single CSS selector out of it, join the array with commas:

```js
const selector = selectors.join(',')
const focusableElements = document.querySelectorAll(selector)
```


## Considering styles

The “focusability” of an element is not solely based on its type, but also on its styles. A relatively straightforward solution is to use JavaScript to figure out whether focusable elements are effectively visible by checking their dimensions.

```js
function isVisible(element) {
  return Boolean(
    element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
  )
}

const selector = selectors.join(',')
const focusableElements = Array.from(
  document.querySelectorAll(selector)
).filter(isVisible)
```
