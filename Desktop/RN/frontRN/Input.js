import {Text, TextInput, TextView, View} from 'react-native';

export default function Input({label, textInputConfig}) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}
