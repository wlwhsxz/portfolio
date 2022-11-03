import React, {useState} from 'react';
import {View, Text} from 'react-native';

export default function MyPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View>
      {isSignedIn ? (
        <Text>(로그인 후)마이페이지 화면</Text>
      ) : (
        <Text style={{justifyContent: 'center'}}>
          로그인이 필요한 페이지입니다.
        </Text>
      )}
    </View>
  );
}
