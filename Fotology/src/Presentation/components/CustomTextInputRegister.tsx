import React from 'react';
import { TextInput, StyleSheet, View, KeyboardType } from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: string) => void;
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

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default CustomTextInput;
