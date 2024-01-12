import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar';

import Colors from '../../Constants/Colors';
import Icons from '../../Constants/Icons';
import Fonts from '../../Constants/Fonts';

import IconCommon from '../../components/common/IconCommon';

interface IProps {
  title: string;
  onPressStar: (showAll: boolean) => void;
}

export default function HeaderPhotosComponent({title, onPressStar}: IProps) {
  const navigation = useNavigation();
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);

  const iconStar = useMemo(() => {
    return showAllPhotos ? Icons.starSolid : faStar;
  }, [showAllPhotos]);

  const goBack = () => {
    navigation.goBack();
  };

  const onPressIcon = () => {
    onPressStar(!showAllPhotos);
    setShowAllPhotos(!showAllPhotos);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <IconCommon
          icon={Icons.arrowLeft}
          color={Colors.black}
          size={20}
          style={{}}
          onPressIcon={goBack}
        />
      </View>
      <Text style={styles.albumTitle}>{title}</Text>
      <View style={styles.iconsContainer}>
        <IconCommon
          icon={iconStar}
          color={Colors.black}
          size={20}
          style={{}}
          onPressIcon={onPressIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '3.5%',
    backgroundColor: Colors.white,
    borderColor: Colors.grey30,
    borderWidth: 1,
  },
  albumTitle: {
    fontSize: 19,
    fontFamily: Fonts.OpenSansBold,
    textAlign: 'center',
    width: '80%',
  },
  iconsContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
