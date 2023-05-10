import { Input, InputProps } from 'antd';
import React from 'react';
import './styles.scss';
import { UseControllerProps, useController } from 'react-hook-form';
interface AppInputProps<T extends Record<string, any>> extends InputProps {
  placeholder?: string;

  type?: string;

  controller: UseControllerProps<T>;
  label?: string;

  error?: boolean;

  textError?: string;
  password?: boolean;
}

export const AppInput = <T extends Record<string, any>>({
  placeholder,
  type = 'text',
  controller,
  label,
  error,
  textError,
  password,
  ...rest
}: AppInputProps<T>) => {
  const {
    field: { onChange, name, value },
  } = useController(controller);

  return (
    <div className="input-container">
      <p className="text-input">{label}</p>
      {password ? (
        <Input.Password
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          status={error ? 'error' : ''}
          {...rest}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          status={error ? 'error' : ''}
          {...rest}
        />
      )}

      <span className="text-error">{error && textError} </span>
    </div>
  );
};

export interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const NumericInput: React.FC<NumericInputProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (e: any) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };
  return (
    <Input
      style={{ width: '15%', textAlign: 'center' }}
      value={value}
      onChange={handleChange}
    />
  );
};
