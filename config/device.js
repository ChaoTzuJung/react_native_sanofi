import { Platform, Dimensions } from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';

// iPhoneX & iphone 11 Pro
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhone 11 & iphone 11 Max
const X_WIDTH_2 = 414;
const X_HEIGHT_2 = 896;

// screen
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export function isIphoneHaveNotch() {
    return (
        Platform.OS === 'ios' && 
        ((SCREEN_HEIGHT === 812 && SCREEN_WIDTH === 375) || (SCREEN_HEIGHT === 375 && SCREEN_WIDTH === 812)) ||
        ((SCREEN_HEIGHT === 896 && SCREEN_WIDTH === 414) || (SCREEN_HEIGHT === 414 && SCREEN_WIDTH === 896))
    )
};  