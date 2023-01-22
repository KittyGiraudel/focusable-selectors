# Focusable Selectors

`focusable-selectors` is a micro-lib exporting an array of CSS selectors for focusable HTML elements. Figuring out which element can be focused is not always trivial and is sometimes necessary to build fully accessible widgets such as [a11y-dialog](https://github.com/KittyGiraudel/a11y-dialog).

It supports:

- All natively focusable elements,
- … and any element with the `contenteditable` attribute,
- … provided they are not disabled,
- … and do not have a negative `tabindex` attribute,
- … and do not have the [`inert` attribute](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert).

For a more advanced solution using JavaScript and covering more edge cases, refer to [focus-trap/tabbable](https://github.com/focus-trap/tabbable).

## Usage

```sh
npm install --save focusable-selectors
```

```js
import focusableSelectors from 'focusable-selectors'
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
