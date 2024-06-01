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
import Theme from '../../theme/theme';
import { downloadFileSaveToDocs } from '../../util/util';
import PDFView from 'react-native-view-pdf';
import { RefreshIcon } from '../../assets/svg';

export default function Display({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [file, setFile] = useState(null);

  var uri = route.params.uri;

  const refreshFileNow = () => {
    setFile(null);
    startFileDownloading(true);
  }

  const startFileDownloading = async (fileRefresh) => {
    setModalVisible(true);
    const downloadResult = await downloadFileSaveToDocs({
      uri,
      name: uri?.split('documents/')[1] ?? 'ABC',
      onProgress: (percentage) => {
        setPercentage(percentage);
      },
      fileRefresh: fileRefresh
    });

    if (downloadResult) {
      setFile(downloadResult);
    }

    if (fileRefresh) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    startFileDownloading();
  }, []);

  return (
    <SafeAreaView style={Theme.SafeArea}>
      <View style={{ flex: 1 }}>
        <View style={styles.backBtn}>
          <TouchableOpacity
            onPress={() => navigation?.goBack()}
            style={[{ zIndex: 999 }]}>
            <Text style={styles.backBtnTxt}>{' <  Go Back'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ zIndex: 9999 }} onPress={refreshFileNow}>
            <RefreshIcon color={"black"} />
          </TouchableOpacity>
        </View>
        <Modal visible={modalVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.backBtn}>
              <TouchableOpacity
                onPress={() => navigation?.goBack()}>
                <Text style={styles.backBtnTxt}>{' <  Go Back'}</Text>
              </TouchableOpacity>
              <TouchableOpacity disabled={true} onPress={refreshFileNow}>
                <RefreshIcon color={"black"} />
              </TouchableOpacity>
            </View>
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
          <PDFView
            fadeInDuration={250.0}
            style={{ flex: 1 }}
            resource={file}
            resourceType={"file"}
            onLoad={() => {
              console.log(`PDF rendered from`)
              setModalVisible(false);
            }}
            onError={(error) => {
              console.log('Cannot render PDF', error)
              setModalVisible(false);
            }}
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
    flexDirection: "row",
    columnGap: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between"
  },
  backBtnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
