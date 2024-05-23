// CustomTextInputRegister.js
import React from 'react';
import { TextInput, StyleSheet, KeyboardType } from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

export const CustomTextInput: React.FC<Props> = ({
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText
}) => {
  return (
    <TextInput
      style={customStyles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={text => onChangeText(property, text)}
      secureTextEntry={secureTextEntry}
    />
  );
};

const customStyles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 0, // Eliminar cualquier borde inferior
  },
});

export default CustomTextInput;
