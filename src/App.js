import React, { Component } from 'react';
import {AppProvider, Page} from '@shopify/polaris';

import AppSetting from './component/AppSetting';
import GeoLocation from './component/GeoLocation';
import CurrencySetting from './component/CurrencySetting';
import PlacementSetting from './component/PlacementSetting';
import PriceIcon from './component/PriceIcon';


class App extends Component {
  render() {
    return (
      <AppProvider>
        <Page title="Settings" separator>
          <PriceIcon src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/sega.svg"/>
          <PriceIcon src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/sega.svg"/>
          <PriceIcon src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.0.1/sega.svg"/>
          <PlacementSetting/>
          <AppSetting/>
          <GeoLocation/>
          <CurrencySetting/>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
