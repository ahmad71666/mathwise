import React, { FC, useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MathGif } from '../../assets/images';


interface SplashProps {
  navigation: any;
}

const Splash: FC<SplashProps> = ({ navigation }) => {

  useEffect(() => {

    setTimeout(() => {
      navigation?.navigate('Home');
    }, 3000);

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={MathGif}
        style={styles.picture}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
  },
  picture: {
    width: Dimensions.get('screen').width * 1.2,
    resizeMode: "contain"
  }
});

export default Splash;
