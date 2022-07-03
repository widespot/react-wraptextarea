# React WrapTextArea 🌭
> a native `<textarea />` but that vertically wraps the content
> thanks to good JS and CSS

```jsx
return (
    <p>
      This is an
      {' '}
      <WrapTextArea placeholder="undefined" />
      {' '}
      input based on a native &lt;input&gt; element
    </p>
)
```

## Dev
Install peer dependencies for Storybook
```sh
npm run test
npm install --no-save react-dom webpack
npm run storybook
```
