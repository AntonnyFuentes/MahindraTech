import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {useTranslation} from 'react-i18next';

import Colors from '../../Constants/Colors';
import Fonts from '../../Constants/Fonts';

import UsersList from '../Users/UsersList';
import ErrorMessage from '../../components/common/ErrorMessage';
import {useHandlersActions} from '../../store/handlers.slice';
import {useAppSelector} from '../../config/hooks';

export default function UsersComponent() {
  const {t} = useTranslation();
  const {errorMessage} = useAppSelector(state => state.handlers);
  const {setErrorMessage} = useHandlersActions();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('users')}</Text>
      <UsersList />

      <ErrorMessage err={errorMessage} setErr={err => setErrorMessage(err)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey10,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.MontserratBold,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
    color: Colors.black,
  },
});
