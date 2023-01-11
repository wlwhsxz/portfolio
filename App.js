import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App() {
  const [write, setWrite] = useState(false);
  const [text, setText] = React.useState('');

  const originNotes = [];

  const [notes, setNotes] = useState(originNotes);
  const [idx, setIdx] = useState(1);

  const addNote = () => {
    let newNote = {id: idx, note: text};
    setNotes(prev => [...prev, newNote]);
    setIdx(prev => prev + 1);
    setWrite(false);
  };

  const renderNote = ({item}) => {
    return (
      <View style={styles.noteContent}>
        <Text style={styles.idText}>{item.id}</Text>
        <Text style={styles.noteText}>{item.note}</Text>
      </View>
    );
  };

  if (write) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setWrite(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                addNote();
              }}>
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.input}>
            <TextInput
              onChangeText={txt => setText(txt)}
              multiline
              placeholder="write your note here"
            />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text>Notepad app</Text>
        </View>
        <View style={styles.note}>
          <FlatList data={notes} renderItem={renderNote} />
        </View>

        <TouchableOpacity
          style={styles.write}
          onPress={() => {
            setWrite(!write);
          }}>
          <View>
            <Text style={styles.writeText}>Write</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    padding: 15,
  },
  note: {
    flex: 20,
    padding: 10,
    margin: 5,
    borderWidth: 2,
  },
  noteContent: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    padding: 10,
  },
  idText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  noteText: {
    // paddingBottom: 10,
  },
  write: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 100,
    padding: 5,
    top: '85%',
    left: '80%',
    backgroundColor: 'yellow',
  },
  writeText: {
    fontSize: 10,
  },
  input: {
    flex: 20,
    padding: 10,
    margin: 5,
    borderWidth: 2,
  },
});

export default App;
