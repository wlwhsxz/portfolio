import {React, useCallback} from 'react';
import {ScrollView} from 'react-native';
import LoginScreen, {SocialButton} from 'react-native-login-screen';

export default function SignIn({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <LoginScreen
        // logoImageSource={require('./assets/logo-example.png')}
        onLoginPress={() => {}}
        onSignupPress={useCallback(() => {
          navigation.push('SignUp');
        })}
        onEmailChange={() => {}}
        onPasswordChange={() => {}}>
        <SocialButton text="Continue with Google" onPress={() => {}} />
        <SocialButton
          text="Continue with Facebook"
          //   imageSource={require('./assets/social/facebook.png')}
          onPress={() => {}}
        />
        <SocialButton
          text="Continue with Twitter"
          //   imageSource={require('./assets/social/twitter.png')}
          onPress={() => {}}
        />
      </LoginScreen>
      {/* <Text>
          로그인 페이지 // 로그인 성공 시, setIsSignedIn(true) 반환 //
          홈(페이지)로 이동
        </Text> */}
    </ScrollView>
  );
}
