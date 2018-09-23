import React from 'react';
import { ScrollView, 
  StyleSheet, 
  TextInput, 
  View,
  Text,
  Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class StartScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style = {styles.container}>
          <Text style = {styles.getStartedText}>
            さあ、作成を始めましょう！！
          </Text>
        </View>
        <View style = {styles.container}>
            <TextInput
                multiline = {true}
                style={styles.textInput}
                placeholder = "プロジェクトにタイトルをつけよう！"
                onChangeText={(text) => this.setState({text})}
            />
        </View>
        <View style={styles.tabBarInfoContainer}>
            <Button
                onPress={() => {
                    navigate('Satisfaction')
                }}
                title="できた！"
            />
        </View>
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
