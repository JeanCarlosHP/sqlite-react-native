import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import UserService from '../services/user.service';
import { User } from '../models/user.model';

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  state = {
      user: null,
      password: null,
      onChangeText: null,
  }

  insertUser = (user: string, password: string) => {
    const a = new User()
    a.user = user
    a.password = password

    UserService.addData(a);
  }

  render() {
    const {user, password} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        
        <Text style={styles.paragraph}>Usuário</Text>
        <TextInput onChangeText={text => { this.setState({ user: text })}} style={styles.input} placeholder="Usuário"/>
        
        <Text style={styles.paragraph}>Senha</Text>
        <TextInput onChangeText={text => { this.setState({ password: text })}} style={styles.input} secureTextEntry={true} placeholder="Senha"/>
        
          <View style={styles.button}>
            <Button onPress={() => (this.insertUser(user, password))} title="Entrar" color="#c0c0c0" />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 18,
  },
  
  title: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
  },
  
  paragraph: {
    fontSize: 18
  },
  
  input: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    padding: 10,
    outline : "none"
  },
  
  button: {
    width: 150,
    marginHorizontal: "auto",
  },
});
