import React, {FC} from 'react';
import {Control, Controller, FieldError, FieldValues} from 'react-hook-form';
import {Text} from 'react-native-magnus';
import {Input} from '@rneui/base';
import {makeFormInputStyle} from './FormInput.style';
import {InputLabel} from '../InputLabel';
import {InputPassword} from '../InputPassword';
export interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  control?: Control<FieldValues>;
  required?: boolean;
  error?: FieldError;
  passwordInput?: boolean;
  labelColor?: string;
}

const FormInput: FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  control,
  error,
  passwordInput = false,
  labelColor = 'black'
}) => {
  const style = makeFormInputStyle();

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <InputLabel title={label} color={labelColor}/>
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
            <Text mt={-20} mb={10} color="red">{error?.message}</Text>
          </>
        );
      }}
    />
  );
};

export default FormInput;
