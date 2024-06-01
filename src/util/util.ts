import ReactNativeBlobUtil from 'react-native-blob-util';

export const downloadFileSaveToDocs = async ({
  uri,
  name,
  onProgress,
  fileRefresh,
}: {
  uri: string;
  name: string;
  onProgress: (percentage: number) => void;
  fileRefresh: boolean;
}) => {
  try {
    const filePath = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${name}`;

    // Check if the file already exists
    const fileExists = await ReactNativeBlobUtil.fs.exists(filePath);

    // If file exists and fileRefresh is true, delete the existing file
    if (fileExists && fileRefresh) {
      await ReactNativeBlobUtil.fs.unlink(filePath);
    }

    // If file exists and fileRefresh is false, return the existing file path
    if (fileExists && !fileRefresh) {
      console.log('exists');
      return `${filePath}`;
    }

    // If the file does not exist or was deleted, download it
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
