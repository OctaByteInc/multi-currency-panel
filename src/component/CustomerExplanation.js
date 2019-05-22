import React, {Component} from 'react';
import { CalloutCard, TextStyle, TextContainer } from '@shopify/polaris';
import Popup from './Popup';

class CustomerExplanation extends Component {

    state = {
        openVideoTutorial: false,
    };

    render(){
        const {openVideoTutorial} = this.state;

        return(
            <CalloutCard
                title="Explaining to your customers what happens at checkout"
                illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                primaryAction={{
                    content: 'Video Tutorial',
                    onAction: () => this.setState({ openVideoTutorial:true })
                }}
                >
                <TextContainer>
                <p>    
                Checkout transaction amounts can only ever be shown in the operating 
                currency of your store, which you specified in the Standards & formats section 
                of your Settings page.
                </p>
                <p>
                When your customers reach checkout, your shop reverts back to its 
                trading currency without explanation. You can, however, edit 
                your <b>cart.liquid</b> template to explain what will happen. You could also 
                add an explanation to the checkout pages using a custom checkout 
                translation (where you only translate what you want).
                </p>
                <p>
                For example, you could use this in <b>cart.liquid</b> next to the checkout button:
                </p>
                <TextStyle variation="code">
                &#x3C;div id=&#x22;octabyte-mcc-cart&#x22; style=&#x22;display:none&#x22;&#x3E;
                {'{{shop.name}}'}  process all orders in  {'{{shop.currency}}'}. 
                While the content of your cart is currently displayed 
                in &#x3C;span id=&#x22;octabyte-selected-currency&#x22;&#x3E;&#x3C;/span&#x3E;, 
                you will checkout using  {'{{shop.currency}}'}  at the most 
                current exchange rate.&#x3C;/div&#x3E;
                </TextStyle>
                </TextContainer>
            {
                openVideoTutorial ? 
                <Popup 
                    key={Math.random()}
                    title="Reach more shoppers with Instagram product tags" 
                    video="ta_tTZrarE0" />
                : ''    
            }
            </CalloutCard>
        )
    }

}

export default CustomerExplanation;