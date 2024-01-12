import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import ButtonHome from '../../components/Buttons/ButtonHome';
import ErrorMessage from '../../components/common/ErrorMessage';
import LoadingComponent from '../../components/common/LoadingComponent';
import {useAppSelector} from '../../config/hooks';
import {useHandlersActions} from '../../store/handlers.slice';
import {useHome} from './useHome';

export default function HomeComponent() {
  const {t} = useTranslation();
  const {setDataHome} = useHome();
  const {setErrorMessage} = useHandlersActions();
  const {loading, errorMessage} = useAppSelector(state => state.handlers);

  const onPressBegin = async () => {
    setDataHome();
  };

  if (loading) return <LoadingComponent />;

  return (
    <View style={styles.homeContainer}>
      <ButtonHome label={t('clickBegin')} onPress={onPressBegin} />
      <ErrorMessage err={errorMessage} setErr={setErrorMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
