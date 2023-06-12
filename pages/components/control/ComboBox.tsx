// TypcScript chroma Sample
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/chroma-js
// 
import React from 'react'
import chroma from 'chroma-js'

import Select, { StylesConfig } from 'react-select'
import { comboBoxOption, comboBoxOptions } from './interfaceType'

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const comboBoxStyles: StylesConfig<comboBoxOption> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};


interface ComboBoxProps {
  id: string
  instanceId: string
  defaultValue: comboBoxOption
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  name?: string
  options: any
  onChange: any
}

const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};


const ComboBox: React.FC<ComboBoxProps> = ({ id, instanceId, defaultValue, isDisabled, isLoading, isClearable, name, options, onChange }) => {
  return (
    <Select
      className="rounded-full max-w-[460px] mx-auto m-1 font-poppins font-normal text-gray-700 text-[18px] leading-[30.8px]"
      id={id}
      instanceId={instanceId}
      defaultValue={defaultValue}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={true}
      name={name}
      options={options}
      onChange={onChange}
      styles={comboBoxStyles} /**groupBadgeStyles */

    />
  )
}

export default ComboBox