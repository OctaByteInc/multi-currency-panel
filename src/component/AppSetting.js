import React, { Component } from 'react';
import {SettingToggle, TextStyle, TextContainer, Heading} from '@shopify/polaris';

class AppSetting extends Component {
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
            <Heading>Enable App</Heading>
            <TextStyle variation="subdued">App is {textStatus}</TextStyle>
            <p>
              Enable or disable the app. If disabled, 
              the currency picker will not be displayed and currencies 
              will not be converted.
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

export default AppSetting;