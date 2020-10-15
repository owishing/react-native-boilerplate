'use strict';

import React from 'react';
import {Button, Text, View} from 'react-native';

module.exports = AboutScreen;

function AboutScreen({navigation, route}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Details Screen(`{itemId} {otherParam}`)
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
