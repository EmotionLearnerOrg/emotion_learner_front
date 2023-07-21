import {Input} from '@rneui/themed';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {makeInputPasswordStyle} from './InputPassword.style';

const InputPassword = ({
  setPassword,
  password,
  placeholder = 'Contraseña',
}: {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  placeholder?: string;
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const style = makeInputPasswordStyle();

  return (
    <Input
      style={style.input}
      placeholder={placeholder}
      placeholderTextColor="#AEB6BF"
      secureTextEntry={!showPassword}
      onChangeText={text => setPassword(text)}
      value={password}
      rightIcon={
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye' : 'eye-off'}
            size={34}
            style={style.icon}
          />
        </TouchableOpacity>
      }
    />
  );
};

export default InputPassword;
