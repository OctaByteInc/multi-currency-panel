import React, { Component } from 'react';
import {AppProvider, Page} from '@shopify/polaris';

import AppSetting from './component/AppSetting';
import GeoLocation from './component/GeoLocation';
import CurrencySetting from './component/CurrencySetting';
import CurrencyList from './component/CurrencyList';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Page title="Settings" separator>
          <AppSetting/>
          <GeoLocation/>
          <CurrencySetting/>
          <CurrencyList/>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
