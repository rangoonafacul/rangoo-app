import { creatStackNavigator } from 'react-navigation';

import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Main from './pages/main'

const Routes = creatStackNavigator({
  SignIn,
  SignUp,
  Main,
});

export default Routes;
