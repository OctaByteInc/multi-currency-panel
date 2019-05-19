import React, { Component } from 'react';
import {SettingToggle, TextStyle, TextContainer, Heading} from '@shopify/polaris';

class GeoLocation extends Component {
    state = {
      enabled: false,
    };

    render() {
      const {enabled} = this.state;
      const contentStatus = enabled ? 'Disable' : 'Enable';
      const textStatus = enabled ? 'enabled' : 'disabled';

      return (
        <SettingToggle
          action={{
            content: contentStatus,
            onAction: this.handleChange,
          }}
          enabled={enabled}
        >
          <TextContainer spacing="tight">
            <Heading>Customer Geo-Location</Heading>
            <TextStyle variation="subdued">Geo-Location is {textStatus}</TextStyle>.
            <p>
                You can set a default currency based on
                the customer's current location. If this 
                app can't find a suitable match, we will use your default currency.
            </p>
          </TextContainer>
        </SettingToggle>
      );

    }

    handleChange = () => {
      this.setState(({enabled}) => {
        return {enabled: !enabled};
      });
    };
}

export default GeoLocation;