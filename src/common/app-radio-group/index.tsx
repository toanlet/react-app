import { Radio, RadioGroupProps } from 'antd';
import React, { useState } from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
interface RadioProps<T extends Record<string, any>> extends RadioGroupProps {
  options: Array<any>;

  controller: UseControllerProps<T>;

  onChange: (e: any) => void;
}

const AppRadioGroup = <T extends Record<string, any>>({
  options,
  controller,
  onChange,
}: RadioProps<T>) => {
  const {
    field: { name, value },
  } = useController(controller);

  return (
    <Radio.Group value={value} name={name} onChange={onChange}>
      {options.map((el: any) => {
        return (
          <Radio key={el.value} value={el.value}>
            {el.text}
          </Radio>
        );
      })}
    </Radio.Group>
  );
};

export default AppRadioGroup;
