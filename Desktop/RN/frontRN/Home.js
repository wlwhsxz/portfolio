import {Children, React, useCallback} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

import Child from './Child';

const pull_data = data => {
  console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
};

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Pressable
          onPress={useCallback(() => {
            navigation.push('SignIn');
          })}>
          <View style={styles.signIn}>
            {/* {isSignedIn ? <Profile /> : <SignIn />} */}
            <Text style={styles.signInText}>Login/Profile</Text>
          </View>
        </Pressable>
        <View style={styles.titleBox}>
          <Text style={styles.titleContent}>Club In My Pocket</Text>
        </View>
      </View>
      <View style={styles.drawingContainer}>
        <Child func={pull_data} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <View style={styles.topButtons}>
            <Pressable>
              <View style={styles.button1}>
                <Text style={styles.buttonText}>중앙동아리</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.button2}>
                <Text style={styles.buttonText}>단과대학</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.bottomButtons}>
            <Pressable
              onPress={useCallback(() => {
                navigation.push('AdBulletinBoard');
              })}>
              <View style={styles.button3}>
                <Text style={styles.buttonText}>홍보게시판</Text>
              </View>
            </Pressable>
            <Pressable>
              <View style={styles.button4}>
                <Text style={styles.buttonText}>요청게시판</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  signInText: {
    fontSize: 20,
  },
  titleBox: {
    alignItems: 'center',
  },
  titleContent: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  signIn: {
    alignItems: 'flex-end',
  },
  drawingContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  buttonContainer: {
    flex: 3,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 50,
    margin: -20,
  },
  buttonText: {
    fontSize: 20,
  },
  button1: {
    backgroundColor: 'gray',
    padding: 35,
    margin: 5,
    borderRadius: 20,
  },
  button2: {
    backgroundColor: 'gray',
    padding: 35,
    margin: 5,
    borderRadius: 20,
  },
  button3: {
    backgroundColor: 'gray',
    padding: 35,
    margin: 5,
    borderRadius: 20,
  },
  button4: {
    backgroundColor: 'gray',
    padding: 35,
    margin: 5,
    borderRadius: 20,
  },
});
