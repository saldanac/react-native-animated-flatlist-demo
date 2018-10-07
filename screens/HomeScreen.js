import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Container, Header, Title, Footer, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Form, Item, Input, Label } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';


import Animations from './Animations';

import AnimatedFlatlist from 'react-native-animated-flatlist';

const animations = [
  {value: 'bounce'},
  {value: 'flash'},
  {value: 'jello'},
  {value: 'pulse'},
  {value: 'rotate'},
  {value: 'rubberBand'},
  {value: 'shake'},
  {value: 'swing'},
  {value: 'tada'},
  {value: 'wobble'},
]

const easings = [
  {value: 'linear'},
  {value: 'ease'},
  {value: 'ease-in'},
  {value: 'ease-out'},
  {value: 'ease-in-out'},
  {value: 'ease-in-cubic'},
  {value: 'ease-out-cubic'},
  {value: 'ease-in-out-cubic'},
  {value: 'ease-in-circ'},
  {value: 'ease-out-circ'},
  {value: 'ease-in-out-circ'},
  {value: 'ease-in-expo'},
  {value: 'ease-out-expo'},
  {value: 'ease-in-out-expo'},
  {value: 'ease-in-quad'},
  {value: 'ease-out-quad'},
  {value: 'ease-in-out-quad'},
  {value: 'ease-in-quart'},
  {value: 'ease-out-quart'},
  {value: 'ease-in-out-quart'},
  {value: 'ease-in-quint'},
  {value: 'ease-out-quint'},
  {value: 'ease-in-out-quint'},
  {value: 'ease-in-sine'},
  {value: 'ease-out-sine'},
  {value: 'ease-in-out-sine'},
  {value: 'ease-in-back'},
  {value: 'ease-out-back'},
  {value: 'ease-in-out-back'},
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    data: [{id: 1}],
    index: 1,
    inAnimation: 'fadeIn',
    outAnimation: 'fadeOut',
    animation: 'pulse',
    duration: '300'
  }

  removeItem = () => {
    const { data: newData } = this.state
    newData.splice(-1,1)
    this.setState({data: newData})
  }

  addItem = () => {
    const { index, data: newData } = this.state
    const newIndex = index + 1
    newData.push({id: newIndex})
    this.setState({data: newData, index: newIndex})
  }
  
  addItemRandomly = () => {
    const { index, data: newData } = this.state
    const newIndex = index + 1
    const random = Math.random() * (newData.length - 0) + 0;
    newData.splice(random, 0, {id: newIndex});
    this.setState({data: newData, index: newIndex})
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Aniamted FlatList</Title>
          </Body>
        </Header>

        {/*
        <View style={styles.dropdownContainer}>
          <View style={{flex: 1}}>
            <Dropdown
              label='Animation'
              data={animations}
              value={this.state.animation}
              onChangeText={animation => {this.setState({animation})}}
            />
          </View>
          <View style={{ width: 20 }} />
          <View style={{flex: 1}}>
            <Dropdown
              label='Easing'
              data={easings}
              value={this.state.easing}
              onChangeText={easing => {this.setState({easing})}}
            />
          </View>
        </View>
        */}

        <View style={styles.dropdownContainer}>
          <View style={{flex: 1}}>
            <Dropdown
              label='In Animation'
              data={Animations}
              value={this.state.inAnimation}
              onChangeText={inAnimation => {this.setState({inAnimation})}}
            />
          </View>
          <View style={{ width: 20 }} />
          <View style={{flex: 1}}>
            <Dropdown
              label='Out Animation'
              data={Animations}
              value={this.state.outAnimation}
              onChangeText={outAnimation => {this.setState({outAnimation})}}
            />
          </View>
        </View>

        <Form style={{marginBottom: 10}}>
          <Item stackedLabel>
            <Label>Duration (ms)</Label>
            <Input
              value={this.state.duration}
              onChangeText={duration => {this.setState({duration})}}
              keyboardType="number-pad"
            />
          </Item>
        </Form>

        <AnimatedFlatlist
          items={this.state.data.concat([])}
          id={"id"}
          inAnimation={this.state.inAnimation}
          outAnimation={this.state.outAnimation}
          animation={this.state.animation}
          easing={this.state.easing}
          duration={this.state.duration}
          rowItem={({item}) => (
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://avatars2.githubusercontent.com/u/2933601?s=460&v=4' }} />
              </Left>
              <Body>
              <Text>ID {item.id} - Shalva Gegia</Text>
              <Text note numberOfLines={1}>React-native Animated Flatlist</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          )}
        />

        <Footer>
          <View style={styles.actions}>
            <Button small primary style={{marginRight: 5}} onPress={this.addItem}>
              <Text>Add item</Text>
            </Button>
            {/*
            <Button small primary style={{marginHorizontal: 5}} onPress={this.addItemRandomly}>
              <Text>Add item Randomly</Text>
            </Button>
            */}
            <Button small primary style={{marginLeft: 5}} onPress={this.removeItem}>
              <Text>Remove</Text>
            </Button>
          </View>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  dropdownContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
});
