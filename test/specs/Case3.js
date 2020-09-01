const Helpers =  require('../helpers/functions');
const ResultsFlightsPage = require('../pageobjects/resultsflights.page');
const PassangerDetails = require('../pageobjects/passangerdetails.page');
const PaymentDetails = require('../pageobjects/payment.page');

//Starting here comment or uncomment code to run this Case /* */

describe('Case 3', () => {
    it('should select book button first result and validate the element from redirected URL', () => {
        //Most of the list is loaded
        ResultsFlightsPage.getVisibilityLoadMoreBtn().waitForDisplayed({timeout:30000});   
        ResultsFlightsPage.getSelectBookButtonFirstResult().waitForDisplayed({timeout:10000});
        Helpers.clickElementOnce(ResultsFlightsPage.getSelectBookButtonFirstResult());
        PassangerDetails.getVisibleContactTextBox().waitForDisplayed({timeout:10000});
        expect (PassangerDetails.getVisibleContactTextBox()).toHaveTextContaining('Contact'); 
        browser.pause(5000);
    }); 

    it('should fill passanger information and select Continue', () => {    
       Helpers.clickElementOnce(PassangerDetails.getSelectEmailTextBox());   
       PassangerDetails.getInputEmail().waitForExist({timeout:10000});
       PassangerDetails.getInputEmail().setValue('starwars@email.com');
       Helpers.clickElementOnce(PassangerDetails.getSelectPhoneTextBox());
       PassangerDetails.getInputPhone().setValue('3054369224');
       Helpers.clickElementOnce(PassangerDetails.getSelectFirstNameTextBox());
       PassangerDetails.getSelectFirstNameTextBox().setValue('Mark'); 
       Helpers.clickElementOnce(PassangerDetails.getSelectLastNameTextBox());
       PassangerDetails.getSelectLastNameTextBox().setValue('Hamill'); 
       Helpers.clickElementOnce(PassangerDetails.getSelectNationalityDropdown());
      // PassangerDetails.getSetCountryTextBox().waitForDisplayed({timeout:10000});
       Helpers.clickElementOnce(PassangerDetails.getSetCountryTextBox());
       Helpers.clickElementOnce(PassangerDetails.getGenderDropdown());
       Helpers.clickElementOnce(PassangerDetails.getSetGenderTextBox());
       Helpers.clickElementOnce(PassangerDetails.getMonthDropdown());
       Helpers.clickElementOnce(PassangerDetails.getSetMonthTextBox());
       Helpers.clickElementOnce(PassangerDetails.getSelectDayTextBox());
       PassangerDetails.getSelectDayTextBox().setValue('25'); 
       Helpers.clickElementOnce(PassangerDetails.getSelectYearTextBox());
       PassangerDetails.getSelectYearTextBox().setValue('1951'); 
       Helpers.clickElementOnce(PassangerDetails.getSelectPassportIDTextBox());
       PassangerDetails.getSelectPassportIDTextBox().setValue('1234567891'); 
       PassangerDetails.getNotExpireCheckBox().waitForClickable({timeout:10000});
       Helpers.clickElementOnce(PassangerDetails.getNotExpireCheckBox());
       Helpers.clickElementOnce(PassangerDetails.getSelectContinueButton());
       PaymentDetails.getTextPaymentSpan().waitForDisplayed({timeout:10000});
       expect (PaymentDetails.getTextPaymentSpan() ).toHaveTextContaining('Pay now for peace of mind');       
    }); 
    it('should select ContinueWSaver button and validate element from payment results page', () => {
        Helpers.clickElementOnce(PaymentDetails.getSelectFareSaverButton());
        PaymentDetails.getSelectYesButton().waitForClickable({timeout:10000});
        Helpers.clickElementOnce(PaymentDetails.getSelectYesButton());
        PaymentDetails.getSelectContinueBasicButton().waitForClickable({timeout:10000});
        Helpers.clickElementOnce(PaymentDetails.getSelectContinueBasicButton());
        Helpers.clickElementOnce(PaymentDetails.getSelectContinueButtonCustomizeTripPage());
        PaymentDetails.getTextInvoiceDetails().waitForDisplayed({timeout:10000});
        expect (PaymentDetails.getTextInvoiceDetails() ).toHaveText('Invoice details');       
    }); 

    it('should validate passanger name ', () => {
        PaymentDetails.getPassangerNameDetails().waitForDisplayed({timeout:5000});
        expect (PaymentDetails.getPassangerNameDetails() ).toHaveTextContaining('Mr Mark');       
    }); 

});