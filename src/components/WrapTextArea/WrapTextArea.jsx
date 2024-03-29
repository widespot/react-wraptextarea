import React from 'react';

const spaceReplace = (s) => s && s.replace(/\n$/, '\n ');

export default function WrapTextArea({
  value, onChange, style, placeholder, name,
}) {
  const elRef = React.useRef();

  const [v, setV] = React.useState(value);

  React.useEffect(() => {
    setV(value);
  }, [value]);

  return (
    <span
      style={{ cursor: 'text', display: 'inline-block', ...style }}
      onClick={() => elRef.current.focus()}
    >
      <span style={{ display: 'block', position: 'relative' }}>
        <span style={{ whiteSpace: 'pre-wrap', display: 'inline-block' }}>
          {spaceReplace(v) || placeholder || <>&nbsp;</>}
        </span>
        <textarea
          style={{
            lineHeight: 'inherit',
            textAlign: 'inherit',
            color: 'inherit',
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: '1em',
            resize: 'none',
            padding: 0,
            margin: 0,
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          placeholder={placeholder}
          ref={elRef}
          value={v}
          name={name}
          onChange={(e) => {
            setV(e.target.value);
            onChange && onChange(e);
          }}
        />
      </span>
    </span>
  );
}
