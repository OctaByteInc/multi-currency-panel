import React, { Component } from 'react';
import {AppProvider, Page} from '@shopify/polaris';

import AppSetting from './component/AppSetting';
import GeoLocation from './component/GeoLocation';
import CurrencySetting from './component/CurrencySetting';
import PlacementSetting from './component/PlacementSetting';
import CustomerExplanation from './component/CustomerExplanation';


class App extends Component {
  render() {
    return (
      <AppProvider>
        <Page title="Settings" separator>
          <AppSetting/>
          <CurrencySetting/>
          <GeoLocation/>
          <PlacementSetting/>
          <CustomerExplanation/>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
