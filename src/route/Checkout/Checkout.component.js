import {
    Checkout as SourceCheckout,
} from 'SourceRoute/Checkout/Checkout.component';

import ProgressBar from 'Component/ProgressBar';
import ContentWrapper from 'Component/ContentWrapper';

export class Checkout extends SourceCheckout {
  render() {
      return (
          <main block="Checkout">
              <ProgressBar steps={Object.keys(this.stepMap)} titles={Object.values(this.stepMap).map(step => step.title)} currentStep={this.props.checkoutStep} />
              <ContentWrapper
                wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                label={ __('Checkout page') }
              >
                  { this.renderSummary(true) }
                  <div block="Checkout" elem="Step">
                      { this.renderTitle() }
                      { this.renderGuestForm() }
                      { this.renderStep() }
                      { this.renderLoader() }
                  </div>
                  <div>
                      { this.renderSummary() }
                      { this.renderPromo() }
                      { this.renderCoupon() }
                  </div>
              </ContentWrapper>
          </main>
      );
  }
};

export default Checkout;
