import React from 'react';
import { View, TextInput, StyleSheet, KeyboardType } from 'react-native';
import styles from '../views/Home/LoginStyles'
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};



export default CustomTextInput;
