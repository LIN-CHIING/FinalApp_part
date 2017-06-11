import React, { Component } from 'react';
import { ScrollView , Image,Linking, StyleSheet,} from 'react-native';
import { List, Text,ListItem,Button,Icon  } from 'react-native-elements';

import me from '../json/me.json';

// Make a component
class Me extends Component {
  state = { me: [] };

  componentWillMount() {
    this.setState({ me });
  }
    goToPageTwo = () => {
    this.props.navigation.navigate('Change');
  };
    goToPageThree = () => {
    this.props.navigation.navigate('Logout');
  };
  render() {
    const {name,yellow,img,photo,butt,list} = styles;
    return (
      <ScrollView style={{backgroundColor:'white'}}> 

      <Image style={img}
        source={require('../assets/img-account.png')}
        />

        <Image style={photo}
        source={require('../assets/pic.png')}
        />
        <Text style={name}> Pucca </Text>
       <List style={yellow}>
          <ListItem
            title="Change Your Photo"
            onPress={() => this.goToPageTwo()}
          />
        </List>

        <List style={list}>
          <ListItem
            title="Username"
            rightTitle={this.state.me.uname}
            //hideChevron
          />
          </List>
          <List style={list}>
          <ListItem
            title="My Target"
            rightTitle={this.state.me.target}
            //hideChevron
          />
          </List>
          <List style={list}>
          <ListItem 
            title="Where Are You From"
            rightTitle={this.state.me.ucity}
            //hideChevron
          />
          </List>
          <List style={list}>
          <ListItem
          title="Call Us"
          leftIcon={{name:'phone',color:'#334559',fontSize:12}}
            rightTitle={this.state.me.phone}
            hideChevron
          />
          </List>
          <List style={list}>
          <ListItem 
            title="Mail Us"
            leftIcon={{name:'email',color:'#334559',fontSize:12}}
            rightTitle={this.state.me.mail}
            hideChevron/>
        </List>

        <Button style={butt}
        onPress={() => this.goToPageThree()}
        backgroundColor='#e7ba3d'
        title="LogOut"
        />
      </ScrollView>
    );
  }
}
const styles = {
  photo:{
    width:160,
    height:160,
    left:113,
    marginTop:54,
    position:'absolute'
  },
  name:{
    color:'white',
    backgroundColor:'#334559',
    fontSize:22,
    marginTop:235,
    marginBottom:60,
    left:155,
    position:'absolute'
  },
  yellow:{
    marginTop:20,
    marginBottom:5,
    backgroundColor:'#ececec'
  },
  list:{
    backgroundColor:'#ececec',
    marginBottom:5,
  },
  img:{
    width:377,
    height:300,
  },
  butt:{
    textAlign: 'center',
    color:'#334559',
    marginTop:50,
    width:200,
    height:45,
    left:90
  }
}

export default Me;
