import React from 'react';
import { ScrollView, 
  StyleSheet, 
  TextInput, 
  View,
  Text,
  Button } from 'react-native';
import { Slider } from 'react-native-elements'
import { ExpoLinksView } from '@expo/samples';

export default class ShareScreen extends React.Component {
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
            その写真を
          </Text>
          <Text style = {styles.centerText}>
            ツイッターで共有しましょう！
          </Text>
        </View>
        <View style={styles.tabBarInfoContainer}>
            <Button
                onPress={() => {
                    navigate('Reflection')
                }}
                title="次へ"
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
  centerText: {
    padding: 40,
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 50,
    textAlign: 'center',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  normalText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
