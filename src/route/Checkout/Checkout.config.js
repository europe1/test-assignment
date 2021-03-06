import {
    SHIPPING_STEP as SOURCE_SHIPPING_STEP,
    BILLING_STEP as SOURCE_BILLING_STEP,
    DETAILS_STEP as SOURCE_DETAILS_STEP,
    PAYMENT_TOTALS as SOURCE_PAYMENT_TOTALS,
    CHECKOUT_URL,
    UPDATE_EMAIL_CHECK_FREQUENCY,
} from 'SourceRoute/Checkout/Checkout.config';

export {
    CHECKOUT_URL,
    UPDATE_EMAIL_CHECK_FREQUENCY,
};

//TODO: implement SHIPPING_STEP
export const SHIPPING_STEP = SOURCE_SHIPPING_STEP;

//TODO: implement BILLING_STEP
export const BILLING_STEP = SOURCE_BILLING_STEP;

//TODO: implement DETAILS_STEP
export const DETAILS_STEP = SOURCE_DETAILS_STEP;

//TODO: implement PAYMENT_TOTALS
export const PAYMENT_TOTALS = SOURCE_PAYMENT_TOTALS;
