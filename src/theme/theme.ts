import {
  Platform,
  StyleSheet,
  ViewStyle,
  ShadowStyleIOS,
  TextStyle,
} from 'react-native';
import {Colors} from './colors';

interface ThemeStyles {
  container: ViewStyle;
  Shadow: ShadowStyleIOS;
  ShadowDisable: ViewStyle;
  SafeArea: ViewStyle;
  flex1: ViewStyle;
  colorBlackNeutral: TextStyle;
  textCenter: TextStyle;
  colorCyanPrimary: TextStyle;
  bgBlackNeutral: ViewStyle;
  colorWhite: TextStyle;
  Shadow31: ViewStyle;
  colorBlack: TextStyle;
  colorBlueshGrayDark: TextStyle;
  bgCyanTint: ViewStyle;
  moveToBottom: ViewStyle;
  moveToBottom2: ViewStyle;
  colorRedNotification: TextStyle;
  SafeAreaGray: ViewStyle;
  rowSpaceBetweenCenter: ViewStyle;
  ShadowNew: ViewStyle;
  colorTertiary: TextStyle;
  colorTagsTextExpired: TextStyle;
  bgGrayTint: ViewStyle;
  userProfileCameraView: ViewStyle;
  colorTagsTextActive: TextStyle;
  bgCyanPrimary: ViewStyle;
  bgWhite: ViewStyle;
  bottomActionButtonContainer: ViewStyle;
  ActionContainerExtendsRow: ViewStyle;
}

const Theme: ThemeStyles = StyleSheet.create<ThemeStyles>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.13,
    shadowRadius: 2,
    elevation: 2,
  },
  Shadow31: {
    shadowColor: Platform.OS === 'ios' ? 'rgba(185, 200, 220, 0.2)' : 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 31,
    elevation: 2,
  },
  ShadowDisable: {
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowColor: 'white',
  },
  SafeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  SafeAreaGray: {
    flex: 1,
    backgroundColor: Colors.grayTint,
  },
  flex1: {
    flex: 1,
  },
  colorBlackNeutral: {
    color: Colors.blackNeutral,
  },
  colorWhite: {
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
  colorCyanPrimary: {
    color: Colors.cyanPrimary,
  },
  colorBlack: {
    color: 'black',
  },
  bgBlackNeutral: {
    backgroundColor: Colors.blackNeutral,
  },
  bgCyanTint: {
    backgroundColor: Colors.cyanTint,
  },
  moveToBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  moveToBottom2: {
    marginBottom: 20,
    marginTop: 50,
  },
  colorRedNotification: {
    color: Colors.redNotification,
  },
  colorBlueshGrayDark: {
    color: Colors.blueshGrayDark,
  },
  rowSpaceBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ShadowNew: {
    shadowColor: Platform.OS === 'ios' ? 'rgba(185, 200, 220, 0.2)' : 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0.3,
  },
  colorTertiary: {
    color: Colors.tertiary,
  },
  colorTagsTextExpired: {
    color: Colors.tagsTextExpired,
  },
  bgGrayTint: {
    backgroundColor: Colors.grayTint,
  },
  userProfileCameraView: {
    height: 40,
    width: 40,
    borderRadius: 40,
    position: 'absolute',
    zIndex: 999,
    backgroundColor: 'white',
    top: -5,
    right: -5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Platform.OS === 'ios' ? 'rgba(185, 200, 220, 0.2)' : 'grey',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 31,
    elevation: 2,
  },
  colorTagsTextActive: {
    color: Colors.tagsTextActive,
  },
  bgCyanPrimary: {
    backgroundColor: Colors.cyanPrimary,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  bottomActionButtonContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.blueshGrayLight,
    backgroundColor: 'white',
  },
  ActionContainerExtendsRow: {
    columnGap: 10,
    flexDirection: 'row',
  },
});

export default Theme;
