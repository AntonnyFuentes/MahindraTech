import React from "react";
import {StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  icon: IconProp;
  color?: string;
  disabledIcon?: boolean;
  size?: number;
  style?: ViewStyle;
  onPressIcon?: () => void;
}

export default function IconCommon({
  color,
  icon,
  disabledIcon,
  size,
  style,
  onPressIcon,
}: IconProps) {
  return (
    <TouchableOpacity
      onPress={onPressIcon}
      disabled={disabledIcon}
      style={style ? style : styles.backButton}
    >
      <FontAwesomeIcon icon={icon} color={color || "white"} size={size || 25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 30,
    paddingTop: 55,
  },
});
