import {React, useCallback} from 'react';
import {View, Text, TextInput, Pressable, FlatList} from 'react-native';
import WritingPage from './WritingPage';

export default function AdBulletinBoard({navigation}) {
  const WritingPage = useCallback(() => {
    navigation.navigate('WritingPage');
  }, [navigation]);

  return (
    <View>
      <View>
        <Text>홍보게시판</Text>
        <View style={{justifyContent: 'flex-end'}}>
          <Text>더보기</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TextInput placeholder="Serach" />
        </View>
        {/* 검색 기능을 구현하기 위해서는 Array.prototype.filter() 라는 배열함수가 필요하다.
            전체적인 로직은 인풋에서 받은 값과 데이터의 값들을 비교하여 일치 하는 값들만 1차적으로 거르고 2차적으로는 거른 값에 Array.prototype.map()으로 다시 데이터를 뿌려주는 것이다.  - https://sunnyfterrain.github.io/devlog/tips-react-search.html */}
      </View>
      <View>
        <Text>게시글 필터 탭</Text>
      </View>
      {/* <FlatList
        data={titleArr}
        renderItem={itemData => {
          return (
            <View key={input}>
              <Text>{itemData.item.text}</Text>
            </View>
          );
        }}>
        <Text>게시글 목록</Text>
      </FlatList> */}
      <View>
        {/* 모달으로 해야되나? */}
        <Pressable
          onPress={WritingPage}
          style={{
            backgroundColor: 'yellow',
            paddingTop: 10,
            paddingHorizontal: 10,
            marginHorizontal: 150,
            justifyContent: 'center',
            position: 'absolute',
          }}>
          <Text>글쓰기</Text>
        </Pressable>
      </View>
    </View>
  );
}
