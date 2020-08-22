
const MainPage = require('../pageobjects/main.page');
const Helpers =  require('../helpers/functions');

describe('Case 1', () => {
    it('should select one-way button', () => {
        browser.setTimeout({'pageLoad': 10000});
       // Helpers.clickElementOnce(MainPage.getDeleteInitialFrom());
        Helpers.clickElementOnce(MainPage.getFlightTypeButton());
        Helpers.clickElementOnce(MainPage.getOneWayFlightButton());  
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/-/-/anytime/no-return?multicity_transport=aircraft&transport=aircraft');
        
        
    });


    it('should add people to flight', () => {
        browser.setTimeout({'implicit' : 5000});
        Helpers.clickElementOnce( MainPage.getPersonTypeButton());
        Helpers.clickElementOnce(MainPage.getAddAdultButton());
        Helpers.clickElementOnce(MainPage.getAddChildButton());
        Helpers.clickElementOnce(MainPage.getAddInfantButton()); 
        Helpers.clickElementOnce(MainPage.getSelectDoneButton());
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/-/-/anytime/no-return?adults=2&children=1&infants=1&multicity_transport=aircraft&transport=aircraft');
        
    
    });

    it('should add From and To destinations', () => {
        browser.setTimeout({'implicit' : 5000});
        MainPage.getFromTextbox().click();
        browser.pause(5000);

        MainPage.getToTextbox().click();
        browser.pause(5000);
    
    });


});


