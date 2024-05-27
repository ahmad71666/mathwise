import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Platform,
  ActivityIndicator,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Theme from '../../theme/theme';

export default function Display({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(
    Platform.OS == 'ios' ? true : false,
  );
  const [percentage, setPercentage] = useState(0);

  var uri = route.params.uri;

  const source = {
    uri: uri,
    // cache: true,
  };

  return (
    <SafeAreaView style={Theme.SafeArea}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={[styles.backBtn, { zIndex: 999 }]}>
          <Text style={styles.backBtnTxt}>{' <  Go Back'}</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => navigation?.goBack()}
              style={styles.backBtn}>
              <Text style={styles.backBtnTxt}>{' <  Go Back'}</Text>
            </TouchableOpacity>
            <ActivityIndicator color={'blue'} size={25} />
            <Text style={{ fontWeight: 'bold', marginTop: 3, color: 'black' }}>
              {`${percentage} %`}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 5,
                color: 'black',
                textAlign: 'center',
                marginHorizontal: 50,
              }}>
              Please Wait While Your Desired Document Is Fetching...
            </Text>
          </View>
        </Modal>
        <Pdf
          renderActivityIndicator={abc => console.log(abc)}
          trustAllCerts={false}
          onLoadProgress={num => {
            setModalVisible(true);
            setPercentage((num * 100).toFixed(1));
          }}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            setModalVisible(false);
          }}
          onPageChanged={(page, numberOfPages) => {
            // console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            // console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  backBtn: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: Platform.OS == 'ios' ? '8%' : '3%',
    right: 10,
  },
  backBtnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
