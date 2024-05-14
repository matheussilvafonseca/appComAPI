import React, { Component } from 'react';

import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';

import Comidas from './src/comidas/Comidas';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comidas: [],
      loading: true
    };

  }

  async componentDidMount() {

    const response = await api.get('v3/b/663c0016ad19ca34f8667cd4');

    this.setState({

      comidas: response.data.record,
      loading: false

    });

  }




  render() {




    if (this.state.loading) {

      return (

        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

          <ActivityIndicator color="#09A6FF" size={40} />

        </View>

      )

    } else {

      return (

        <View style={styles.container}>



          <FlatList

            data={this.state.comidas}

            keyExtractor={item => item.id.toString()}

            renderItem={({ item }) => <Comidas data={item} />}

          />

        </View>

      )

    }

  }

}




const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#8f0404',

  }

});




export default App; 