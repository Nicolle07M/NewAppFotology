import React from 'react';
import { View, TextInput, StyleSheet, KeyboardType } from 'react-native';

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
    <View style={customStyles.inputContainer}>
      <TextInput
        style={customStyles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const customStyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Línea inferior
    borderBottomColor: 'gray', // Color de la línea
    marginBottom: 20, // Espacio entre cajas de texto
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
