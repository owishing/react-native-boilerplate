'use strict';

import React from 'react';
import {Button, Text, View} from 'react-native';

module.exports = HomeScreen;

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() =>
          navigation.navigate('About', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}
