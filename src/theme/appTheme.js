import {Dimensions, PixelRatio} from 'react-native';

// === Dimensions ===
const {width, height} = Dimensions.get('screen');

export function normalize(size = 1) {
    const scale = width / 420;
    const newSize = size * scale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const FONTS = {
    light: 'Axiforma-Light',
    regular: 'Axiforma-Regular',
    medium: 'Axiforma-Medium',
    semibold: 'Axiforma-SemiBold',
    bold: 'Axiforma-Bold',
}



export const FSIZE = {
    sm: normalize(18),
    normal: normalize(20),
    md: normalize(22),
    big: normalize(26),
    max: normalize(34),
    title: normalize(50),

    //app dimensions
    screenHeight: height,
    screenWidth: width,
}

export const COLOR = {
    background: "#070607",
    purple300: "#573AF1",
    purple200: "#9F8FF8",
    gray200: "#8E8B8E",
    gray300: "#403E44",
    gray400: "#272627",
    green300: "#21C688",
    green200: "#99E5C9",
    red: "#EF3A3E",
}