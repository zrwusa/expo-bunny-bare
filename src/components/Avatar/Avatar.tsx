import React from "react";
import {Image, ImageSourcePropType, ImageStyle, ImageURISource, StyleProp} from "react-native";
import {useSizeLabor} from "../../providers/size-labor";
import {useThemeLabor} from "../../providers/theme-labor";
import {getStyles} from "./styles";
import {SizeKeys} from "../../types";
import {ImageUploader, ImageUploaderProps} from "../ImageUploader";

export interface AvatarProps {
    source: ImageSourcePropType,
    size?: SizeKeys,
    style?: StyleProp<ImageStyle>,
    shouldUpload?: boolean,
    uploaderProps?: ImageUploaderProps
}

export type SizeAvatarMap = {
    [key in SizeKeys]: number
}

export function Avatar(props: AvatarProps) {
    const sizeLabor = useSizeLabor();
    const themeLabor = useThemeLabor();
    const {wp} = sizeLabor.designsBasedOn.iphoneX
    const styles = getStyles(sizeLabor, themeLabor);
    const {size, source, style, shouldUpload = false, uploaderProps} = props
    const finalSize: SizeKeys = size || 'm';
    const sizeAvatarMap: SizeAvatarMap = {
        xxs: wp(16),
        xs: wp(20),
        s: wp(26),
        m: wp(32),
        l: wp(40),
        xl: wp(56),
        xxl: wp(78)
    }

    return shouldUpload
        ?
        <ImageUploader
            style={[styles.Avatar, {
                width: sizeAvatarMap[finalSize],
                height: sizeAvatarMap[finalSize],
                borderRadius: sizeAvatarMap[finalSize] / 2,
            }]}
            imageStyle={[{
                width: sizeAvatarMap[finalSize] - wp(2),
                height: sizeAvatarMap[finalSize] - wp(2),
                borderRadius: sizeAvatarMap[finalSize] / 2,
            }, style]}
            width={sizeAvatarMap[finalSize] - wp(2)}
            height={sizeAvatarMap[finalSize] - wp(2)}
            source={source as ImageURISource}
            {...uploaderProps}
        />
        : <Image
            style={[styles.Avatar, {
                width: sizeAvatarMap[finalSize],
                height: sizeAvatarMap[finalSize],
                borderRadius: sizeAvatarMap[finalSize] / 2,
            }, style]}
            width={sizeAvatarMap[finalSize]}
            height={sizeAvatarMap[finalSize]}
            source={source}/>
}
