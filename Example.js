import React from "react";
import { Text, StatusBar, ScrollView, View, Image, StyleSheet } from "react-native";

function somar (valor1, valor2) {
  return valor1 + valor2
}

function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor ="#034574"/>
    <Text style={{color: '#999', fontSize: 36}}>
      Meu nome é Fernanda
    </Text>
    <Image
        source={{
          uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQMsjWNKKuIKkRCKanNnoNJdl73wsCEHsZ0ckzHqqgDy23V5-Fr',
        }}
        style={styles.image}
      />
      <Image
        source={require('./assets/monkey.jpg')}
        style={styles.image}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    marginTop: 10,
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    resizeMode: 'cover',
  }
});

export default App;