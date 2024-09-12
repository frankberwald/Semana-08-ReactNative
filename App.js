import React from "react";
import { Text, Image, View, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App () {
  return (
    <ScrollView style={{margin: 20}}>
      <StatusBar backgroundColor = "#0077B5"/>

      <Image style={style.profileImage}
        source ={require('./assets/andrew.jpg')}
      />

    <Text style={style.myName}>
    Andrew Ryan
    </Text>

    <Text style={style.jobFunction}>
      Desenvolvedor de Software
    </Text>

    <View>
      <Text style={style.title}>
        Contato</Text>
      <Text style={style.jobContact}><FontAwesomeIcon icon={faEnvelope} style={style.iconStyle}/> email@outlook.com</Text>
      <Text style={style.jobContact}><FontAwesomeIcon icon={faPhone} style={style.iconStyle}/> (69) 99934-2123</Text>
      <Text style={style.jobContact}><FontAwesomeIcon icon={faLinkedin} style={style.iconStyle}/> linkedin.com/in/AndrewRyans</Text>
    </View>

    <View>
    <Text style={style.title}>Resumo</Text>
    <Text style={style.jobResume}>Desenvolvedor de software com 1 ano e 4 meses de experiência, em aplicações para desktop usando c++ e c#, 3 meses de experiência com páginas web estáticas com Html, Css e Javascript e 3 meses de experiência em aplicações móveis utilizando ReactNative e Javascript, com forte capacidade de resolver problemas, aprender novas tecnologias e trabalhar em equipe.</Text>
    </View>

    <View>
    <Text style={style.title}>Experiência</Text>
      <Text style={style.jobTitle}>Desenvolvedor Senior</Text>
      <Text style={style.companyName}>Empresa ABC</Text>
      <Text style={style.jobDate}>Jan 2020 - Presente</Text>
      <Text style={style.jobResume}>. Desenvolvi aplicativos móveis usando React Native.</Text>

      <Text style={style.jobTitle}>Desenvolvedor Pleno</Text>
      <Text style={style.companyName}>Empresa FGH</Text>
      <Text style={style.jobDate}>Jan 2019 - Dez 2019</Text>
      <Text style={style.jobResume}>. Desenvolvi aplicativos web usando React e Node.</Text>

      <Text style={style.jobTitle}>Desenvolvedor Junior</Text>
      <Text style={style.companyName}>Empresa XYZ</Text>
      <Text style={style.jobDate}>Jan 2017 - Jan 2019</Text>
      <Text style={style.jobResume}>. Desenvolvi aplicativos desktop usando C# e framework ASP.NET.</Text>
    </View>

    <View>
    <Text style={style.title}>Educação</Text>
    <Text style={style.jobTitle}>Bacharel em Ciência da Computação</Text>
    <Text style={style.jobResume}>Universidade Federal</Text>
    <Text style={style.jobDate}>Jan 2012 - Dez -2016</Text>
    </View>

    <View>
    <Text style={style.title}>Habilidades</Text>
    </View>

    <View style={style.tagContainer}>
    <TouchableOpacity style={style.tag}><Text style={style.tagText}>React Native</Text></TouchableOpacity>
    <TouchableOpacity style={style.tag}><Text style={style.tagText}>JavaScript</Text></TouchableOpacity>
    <TouchableOpacity style={style.tag}><Text style={style.tagText}>Redux</Text></TouchableOpacity>
    <TouchableOpacity style={style.tag}><Text style={style.tagText}>Git</Text></TouchableOpacity>
    <TouchableOpacity style={style.tag}><Text style={style.tagText}>Node.js</Text></TouchableOpacity>
    </View>

    </ScrollView>




  );
};

const style = StyleSheet.create({
  myName: {
    color:'#0077B5',
    fontSize: 28,
    textAlign:'center',
  },
  profileImage : {
    borderRadius: 100,
    alignSelf: 'center',
    paddingBottom: 15
  },
  title: {
    color: '#0077B5',
    textAlign:'left',
    fontSize:24, paddingLeft:5,
    paddingRight:5,
    borderBottomWidth:2,
    borderBottomColor:'#0077B5',
    paddingBottom:5,
  },
  iconStyle: {
    fontSize:16,
    color: '#0077B5',
  },
  jobResume: {
    color:'#444',
    fontSize: 18,
    extAlign:'left',
    paddingTop:10,
    paddingBottom: 10,
    paddingLeft: 5,
  },
  jobContact: {
    color:'#444',
    paddingLeft:10,
    fontSize:18,
  },
  jobFunction: {
    color:'#444',
    fontSize: 20,
    textAlign:'center',
  },
  jobTitle: {
    color: '#0077B5',
    textAlign:'left',
    fontSize:24, paddingLeft:5,
    paddingRight:5,
    paddingBottom:5,
    marginTop:10,
  },
  companyName: {
    color: '999',
    fontSize: 18,
    paddingLeft: 5,
  },
  jobDate: {
    padding: 5
  },
  tagContainer: {
    justifyContent: 'left',
    alignItems: 'left',
    marginTop: 20,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: '#EAF4FF',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    maxWidth: 125,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tagText: {
    color: '#2B6CB0',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
export default App;