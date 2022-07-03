import React from 'react';
import { render } from '@testing-library/react';

import WrapTextArea from './WrapTextArea';

describe('WrapTextArea', () => {
  test('renders the WrapTextArea component', () => {
    render(<WrapTextArea />);
  });
});
