import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router/Router';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
