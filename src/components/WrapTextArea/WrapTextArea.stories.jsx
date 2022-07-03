import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WrapTextArea from './WrapTextArea';

export default {
  title: 'ReactComponentLibrary/WrapTextArea',
  component: WrapTextArea,
  argTypes: {
    onChange: { action: 'changed' },
    value: {
      required: false,
      control: { type: 'text' },
    },
    placeholder: {
      required: false,
      control: { type: 'text' },
    },
  },
};

function Template(args) {
  return (
    <p>
      This is an
      {' '}
      <WrapTextArea {...args} />
      {' '}
      text area based on a native
      {' '}
      <code>&lt;textarea&gt;</code>
      {' '}
      element
    </p>
  );
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'undefined',
  value: null,
  style: {},
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  placeholder: null,
  value: null,
  style: {},
};
