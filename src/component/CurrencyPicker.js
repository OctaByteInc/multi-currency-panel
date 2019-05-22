import React, { Component } from 'react';
import { Layout, Card, TextStyle, Stack, RadioButton, Button } from '@shopify/polaris';

class CurrencyPicker extends Component {

    state = {
        pickerLocation: 'edge',
        buttonState: 'outline',
        location: 'tr',
        locationText: 'Top Right',
    };

    handleRadioChange = (checked, newValue) => {
        this.setState({ pickerLocation: newValue });
    };

    savePickerLocation = () => {
        this.setState({ buttonState: 'loading' });
    };

    selectLocation = (e) => {
        const loc = e.currentTarget.dataset.cls;
        let text = 'Top Right';
        switch(loc){
            case 'tr':
                text = 'Top Right';
                break;
            case 'tm':
                text = 'Top Middle';
                break;
            case 'tl':
                text = 'Top Left';
                break;   
            case 'br':
                text = 'Bottom Right';
                break;              
            case 'bm':
                text = 'Bottom Middle';
                break;        
            case 'bl':
                text = 'Bottom Left';
                break;
            default:
                text = 'Top Right';               

        }
        this.setState({ location: loc, locationText: text });
    } 

    render(){
        const {pickerLocation, buttonState, location, locationText} = this.state;
        const spacing = pickerLocation === 'edge' ? '0' : '2%';
        
        return(
            <Card>
              <div className="Polaris-Card__Section">    
                <Layout>
                    <Layout.Section secondary>
                      <div className="cp-box-margin">
                        <p>
                            <TextStyle variation="strong">
                                Choose the placement of the currency picker:
                            </TextStyle>
                        </p>
                        <div className={`cp-box ${location}`}>
                            <div className="cp-box-tl" data-cls="tl" onClick={this.selectLocation.bind(this)} style={{ top:spacing }}></div>
                            <div className="cp-box-tm" data-cls="tm" onClick={this.selectLocation.bind(this)} style={{ top:spacing }}></div>
                            <div className="cp-box-tr" data-cls="tr" onClick={this.selectLocation.bind(this)} style={{ top:spacing }}></div>

                            <span className="cp-box-text">Placement: {locationText}</span>

                            <div className="cp-box-bl" data-cls="bl" onClick={this.selectLocation.bind(this)} style={{ bottom:spacing }}></div>
                            <div className="cp-box-bm" data-cls="bm" onClick={this.selectLocation.bind(this)} style={{ bottom:spacing }}></div>
                            <div className="cp-box-br" data-cls="br" onClick={this.selectLocation.bind(this)} style={{ bottom:spacing }}></div>
                        </div>
                      </div>    
                    </Layout.Section>
                    <Layout.Section>
                        <TextStyle variation="strong">Spacing:</TextStyle><br/>
                        <TextStyle variation="subdued">
                            You can fully customize the alignment and 
                            spacing of the currency picker by editing 
                            the CSS. The options below are basic settings 
                            that don't require code changes.
                        </TextStyle>

                      <div style={{ marginTop: '4rem' }}>    
                        <Stack vertical>
                            <RadioButton
                                label="Edge"
                                helpText="The currency picker will be placed directly on the edge of the browser window."
                                checked={pickerLocation === 'edge'}
                                id="edge"
                                name="picker-location"
                                onChange={this.handleRadioChange}
                            />
                            <RadioButton
                                label="Floating"
                                helpText="The currency picker will float near the edge of the browser window."
                                checked={pickerLocation === 'floating'}
                                id="floating"
                                name="picker-location"
                                onChange={this.handleRadioChange}
                            />
                        </Stack>
                      </div>
                      <div style={{ marginTop: '1rem' }}>
                      {
                        buttonState === 'outline' ?
                        <Button outline onClick={() => this.savePickerLocation()}>Save</Button>
                        :
                        <Button loading>Save</Button>
                      }
                      </div>
                    </Layout.Section>
                </Layout>
              </div>    
            </Card>
        );
    }


}

export default CurrencyPicker;