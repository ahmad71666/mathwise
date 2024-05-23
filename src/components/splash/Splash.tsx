import React, { FC, useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface SplashProps {
  navigation: any;
}

const Splash: FC<SplashProps> = ({ navigation }) => {

  useEffect(() => {

    setTimeout(() => {
      navigation?.navigate('Home');
    }, 800);

  }, []);

  return (
    <View>
      <Text>ahmad</Text>
    </View>
  );
};

export default Splash;
