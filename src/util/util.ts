import ReactNativeBlobUtil from 'react-native-blob-util';

export const downloadFileSaveToDocs = async ({
  uri,
  name,
  onProgress,
}: {
  uri: string;
  name: string;
  onProgress: (percentage: number) => void;
}) => {
  try {
    const filePath = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${name}.pdf`;

    // Check if the file already exists
    const fileExists = await ReactNativeBlobUtil.fs.exists(filePath);
    if (fileExists) {
      console.log('exists');
      return `${filePath}`;
    }

    // If the file does not exist, download it
    const fetch = ReactNativeBlobUtil.config({
      fileCache: true,
      path: filePath,
    }).fetch('GET', uri);

    fetch.progress({interval: 100}, (received, total) => {
      let percentage = Math.floor((received / total) * 100);
      onProgress(percentage);
    });

    const fileResult = await fetch;

    if (fileResult) {
      return fileResult?.path();
    }
  } catch (error) {
    console.log(error, 'Error While Downloading PDF');
  }
};
