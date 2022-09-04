import React from "react";

import { useStyles } from './styles';

interface TextFieldProps {
  placeholder?: string,
  isTextFieldBColor?: boolean,
  color?: string,
  onChange?: (e: any) => void,
  onBlur?: (e: any) => void,
  value?: string | number,
  id?: string
  name?: string,
  error?: string,
  onInput?: (e: any) => void
}

const TextField = ({ 
  placeholder, isTextFieldBColor = false, color,
  onChange, value, id, name, onBlur, error, onInput
}: TextFieldProps) => {
  const { textField, textField_bColor, textField_error } = useStyles({ color });

  return (
    <div className={`${textField} ${error ? 'error' : ''}`}>
      <input 
        id={id}
        type="text" 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} 
        onBlur={onBlur} 
        onInput={onInput}
        value={value}
      />
      {
        isTextFieldBColor && <div className={textField_bColor}></div>
      }
      {
        error && <div className={textField_error}>{ error }</div>
      }
    </div>
  );
}

export default TextField;
