import {useNavigation} from '@react-navigation/native';

import {useUsersActions} from '../../store/users.slice';
import {useHandlersActions} from '../../store/handlers.slice';
import {MainRoutes} from '../../navigation/Routes';
import {getUsersBckend} from '../../utils/database/users/usersBackend';

export function useHome() {
  const {setUsers} = useUsersActions();
  const {setErrorMessage, setLoading} = useHandlersActions();
  const navigation = useNavigation();

  const setDataHome = async () => {
    setLoading(true);

    const {users, err} = await getUsersBckend();

    if (err) {
      setLoading(false);
      setErrorMessage(err);
      return;
    }

    setUsers(users);
    navigation.navigate(MainRoutes.USERS as never);
    setLoading(false);
  };

  return {setDataHome};
}
