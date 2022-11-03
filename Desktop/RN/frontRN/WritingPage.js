import {React, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import Input from './Input';

export default function WritingPage({onSubmit}) {
  // 실습 중인 코드를 위한 선언
  const [inputValues, setinputValues] = useState({
    title: '',
    content: '',
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    // inputIdentifier 에는 title, content, date 중 하나가 들어감
    setinputValues(currentInputValues => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue, //javascript 표준 syntax
      };
    });
  }

  function submitHandler() {
    const textData = {
      title: inputValues.title,
      content: inputValues.content,
    };
    onSubmit(textData);
  }

  // 내가 짠 코드를 위한 선언

  // const [inputTitleText, setInputTitleText] = useState('');
  // const [titleArr, setTitleArr] = useState([]);
  //   const [contentText, setContentText] = useState('');

  // function inputTitleTextHandler(input) {
  //   setInputTitleText(input);
  // }
  // function addTitleHandler() {
  //   setTitleArr(currentTitleArr => [
  //     ...titleArr,
  //     {text: inputTitleText, key: Math.random().toString()},
  //   ]);
  // }

  return (
    // 아래는 실습 중인 코드
    <View>
      <Input
        label="Title"
        textInputConfig={{
          // keyboardType: 'number-pad', 숫자 전용 키보드 타입 설정
          placeholder: 'Title',
          maxLength: 30,
          onChangeText: inputChangeHandler.bind(this, 'title'), // bind()를 통해 inputIdentifier를 넘겨받음
        }}
      />
      <Input
        label="Content"
        textInputConfig={{
          placeholder: 'Write your Content here',
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'content'),
          value: inputValues.content,

          // auotoCapitalize : 'none',
          // autoCorrect : false,
        }}
      />
      <View>
        <Button title="Done" onPress={submitHandler} />
      </View>
    </View>

    // 아래는 내가 짠 코드

    // <View>
    //   <View>
    //     <TextInput placeholder="Title" onChangeText={inputTitleTextHandler} />
    //   </View>
    //   <Button title="Done" onPress={addTitleHandler} />
    //   <View>
    //     {titleArr.map(input => (
    //       <Text>{input}</Text>
    //     ))}
    //   </View>
    //   <TextInput placeholder="Write your contents" onChangeText={contentText} />
    // </View>
  );
}
