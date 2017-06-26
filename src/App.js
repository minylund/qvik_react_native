import React, { Component } from 'react';
import { NativeModules, Platform, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { addLocaleData, IntlProvider } from 'react-intl';
import fiLocale from 'react-intl/locale-data/fi';
import svLocale from 'react-intl/locale-data/sv';
import AppNavigation from './navigation/AppNavigation';
import reducers from './reducers';
import FI_MESSAGES from '../assets/strings/fi_FI.json';
import SV_MESSAGES from '../assets/strings/sv_SE.json';

const translations = {
  fi: FI_MESSAGES,
  sv: SV_MESSAGES,
};

class App extends Component {

  constructor(props) {
    super(props);
    addLocaleData([...fiLocale, ...svLocale]);
  }

  getLocale () {
    if (Platform.OS === 'android') {
      return NativeModules.I18nManager.localeIdentifier.replace(/_/, '-').split('-')[0];
    } else {
      return NativeModules.SettingsManager.settings.AppleLocale.replace(/_/, '-').split('-')[0];
    }
  }

  render() {
    const locale = this.getLocale();
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <IntlProvider
           locale={locale}
           textComponent={Text}
           messages={translations[locale]}
           >
           <AppNavigation />
         </IntlProvider>
      </Provider>
    );
  }
}

export default App;
