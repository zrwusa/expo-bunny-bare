import {StyleSheet} from "react-native";
import {SizeLabor, ThemeLabor} from "../../../types";

export const getStyles = (sizeLabor: SizeLabor, themeLabor: ThemeLabor) => {
    const {ms, designsBasedOn} = sizeLabor;
    const {wp, hp} = designsBasedOn.iphoneX;
    const {colors} = themeLabor.theme;
    return StyleSheet.create({
        container: {
            // padding: ms.sp.m
        }
    });
}
