const Helpers =  require('../helpers/functions');
const ResultsFlightsPage = require('../pageobjects/resultsflights.page');
const PassangerDetails = require('../pageobjects/passangerdetails.page');


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
       // PassangerDetails.getSelectEmailTextBox().waitForClickable({timeout:10000});
    
       Helpers.clickElementOnce(PassangerDetails.getSelectEmailTextBox());
       //browser.pause(10000);   
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
        //Validar en nueva pagina d vonfirmation con el span = Pay now for peace of mind. Save later if you need to make a necessary change to your itinerary. 
      // browser.pause(10000);

        
         
    }); 


});