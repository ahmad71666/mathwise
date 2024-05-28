import ReactNativeBlobUtil from 'react-native-blob-util';

export const downloadFileSaveToDocs = async ({
  uri,
  onProgress,
}: {
  uri: string;
  onProgress: (percentage: number) => void;
}) => {
  try {
    const fetch = ReactNativeBlobUtil.config({
      fileCache: true,
      appendExt: 'pdf',
    }).fetch('GET', uri);

    fetch.progress({interval: 100}, (received, total) => {
      let percentage = Math.floor((received / total) * 100);
      onProgress(percentage);
    });

    const fileResult = await fetch;

    if (fileResult) {
      return `file://${fileResult?.path()}`;
    }
  } catch (error) {
    console.log(error, 'Error While Downloading PDF');
  }
};
