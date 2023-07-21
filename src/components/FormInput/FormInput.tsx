import React, {FC} from 'react';
import {Control, Controller, FieldError, FieldValues} from 'react-hook-form';
import {Text} from 'react-native-magnus';
import {Input} from '@rneui/base';
import {makeFormInputStyle} from './FormInput.style';
import {InputPassword, InputLabel} from '../index';

export interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  control?: Control<FieldValues>;
  required?: boolean;
  error?: FieldError;
  passwordInput?: boolean;
}

const FormInput: FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  control,
  error,
  passwordInput = false,
}) => {
  const style = makeFormInputStyle();

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <InputLabel title={label} />
            {!passwordInput ? (
              <Input
                style={style.input}
                placeholder={placeholder}
                placeholderTextColor="#AEB6BF"
                onChangeText={onChange}
                value={value}
              />
            ) : (
              <InputPassword setPassword={onChange} password={value} />
            )}
            <Text color="red">{error?.message}</Text>
          </>
        );
      }}
    />
  );
};

export default FormInput;
