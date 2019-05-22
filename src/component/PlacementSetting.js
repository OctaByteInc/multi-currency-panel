import React, { Component } from 'react';
import {SettingToggle, TextStyle, TextContainer, Heading, Collapsible, Card, List, Subheading, Button} from '@shopify/polaris';

import CurrencyPicker from './CurrencyPicker';
import Popup from './Popup';

class PlacementSetting extends Component {
    state = {
      defaultPicker: true,
      showIcons: false,
    };

    descriptionText = ()  => {
        return (
            this.state.defaultPicker ?
            <p>
                Select where the default currency picker will be placed on your store.
                You can also add the <TextStyle variation="strong">custom</TextStyle> picker.
            </p>
            :
            <p>
               Make sure you set up custom currency picker in your theme, otherwise
               picker will not work. You can also 
               use <TextStyle variation="strong">default</TextStyle> picker.     
            </p>
        );            
    };

    generateCode = () => {
        console.log('Open poopup');
        this.setState({ showIcons: true });
    };

    render() {
      const {defaultPicker} = this.state;
      const contentStatus = defaultPicker ? 'Customize' : 'Default';
      const textStatus = defaultPicker ? 'Default picker is enabled' : 'Custom picker is enabled';

      return (
        <Card> 
            <SettingToggle
            action={{
                content: contentStatus,
                onAction: this.handleChange,
            }}
            enabled={defaultPicker}
            >
            <TextContainer spacing="tight">
                <Heading>Currency Picker</Heading>
                <TextStyle variation="subdued">{textStatus}</TextStyle>.
                { this.descriptionText() }
            </TextContainer>
            </SettingToggle>
            <Collapsible open={defaultPicker} id="basic-collapsible">
                <CurrencyPicker/>
            </Collapsible>
            <Collapsible open={!defaultPicker} id="basic-collapsible">
                <div className="Polaris-Card__Section">
                    <Subheading>Follow these setps</Subheading><br/>
                    <List type="number">
                        <List.Item>Generate the code and copy it</List.Item>
                        <List.Item>Go to <b>Themes</b> inside <b>Online store</b></List.Item>
                        <List.Item>Click on <b>Actions -> Edit Code</b> </List.Item>
                        <List.Item>Open <b>theme.liquid</b> from <b>Layout</b> folder</List.Item>
                        <List.Item>
                            Place the code where you want to show <b>currency picker</b>
                        </List.Item>
                        <List.Item>Save the file.</List.Item>
                    </List>
                    <br/>
                    <Button onClick={this.generateCode.bind()}>Generate Code</Button>
                </div>
             
            <Popup 
            title="Reach more shoppers with Instagram product tags" 
            video="ta_tTZrarE0" />

            </Collapsible>
        </Card>
      );

    }

    handleChange = () => {
      this.setState((state) => {
        return {
            defaultPicker: !state.defaultPicker,
            open: !state.open
        };
      });
    };
}

export default PlacementSetting;