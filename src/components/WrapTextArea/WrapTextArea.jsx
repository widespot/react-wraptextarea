import React from 'react';

const spaceReplace = (s) => s && s.replace(/\n$/, '\n ');

export default function WrapTextArea({
  value, onChange, style, placeholder,
}) {
  const elRef = React.useRef();

  const [v, setV] = React.useState(value);

  React.useEffect(() => {
    setV(value);
  }, [value]);

  return (
    <div
      style={{ ...style, cursor: 'text', display: 'inline-block' }}
      onClick={() => elRef.current.focus()}
    >
      <div style={{ position: 'relative' }}>
        <span style={{ whiteSpace: 'pre-wrap', display: 'inline-block' }}>
          {spaceReplace(v) || placeholder || <>&nbsp;</>}
        </span>
        <textarea
          style={{
            lineHeight: 'inherit',
            textAlign: 'inherit',
            resize: 'none',
            padding: 0,
            margin: 0,
            border: 'none',
            fontFamily: 'inherit',
            fontSize: '1em',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          placeholder={placeholder}
          ref={elRef}
          value={v}
          onChange={(e) => {
            setV(e.target.value);
            onChange && onChange(e);
          }}
        />
      </div>
    </div>
  );
}
