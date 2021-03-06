import React from 'react';
import { ScrollView, 
  StyleSheet, 
  TextInput, 
  View,
  Text,
  Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class IdeaScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    this.state = {text: '', showButton: false}
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.text != ''){
      this.state.showButton = true;
    }
    else{
      this.state.showButton =false;
    }
    return (
      <ScrollView style={styles.container}>
        <View style = {styles.container}>
          <Text style = {styles.getStartedText}>
            では作りましょう！
          </Text>
        </View>
        <View style = {styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder = "作るために必要なものは？"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        {this.state.showButton && 
          <View style={styles.tabBarInfoContainer}>
            <Button
              onPress={() => {
                navigate('Start')
              }}
              title="次へ"
            />
          </View>
        }
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  textInput: {
    fontSize: 20,
  },
  getStartedText: {
    padding: 10,
    fontSize: 42,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
});
