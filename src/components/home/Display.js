import React, { useEffect, useState } from 'react';
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
import { downloadFileSaveToDocs } from '../../util/util';

export default function Display({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [file, setFile] = useState(null);

  var uri = route.params.uri;

  const startFileDownloading = async () => {
    setModalVisible(true);
    const downloadResult = await downloadFileSaveToDocs({
      uri,
      onProgress: (percentage) => {
        setPercentage(percentage);
      },
    });

    if (downloadResult) {
      setFile(downloadResult);
    }
  };

  useEffect(() => {
    startFileDownloading();
  }, []);

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
        {file ? (
          <Pdf
            renderActivityIndicator={abc => console.log(abc)}
            trustAllCerts={false}
            source={{
              uri: file
            }}
            onLoadComplete={(numberOfPages, filePath) => {
              setModalVisible(false);
            }}
            onError={error => {
              console.log(error);
              navigation?.goBack();
              setTimeout(() => {
                alert("Error While Opening PDF");
              }, 1000);
            }}
            style={styles.pdf}
          />
        ) : null}
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
