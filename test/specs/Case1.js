
const MainPage = require('../pageobjects/main.page');
const Helpers =  require('../helpers/functions');
const { getFromSearch } = require('../pageobjects/main.page');

describe('Case 1', () => {
    it('should select one-way button', () => {
        browser.setTimeout({'pageLoad': 10000});
       // Helpers.clickElementOnce(MainPage.getDeleteInitialFrom());
        Helpers.clickElementOnce(MainPage.getFlightTypeButton());
        Helpers.clickElementOnce(MainPage.getOneWayFlightButton());  
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/-/-/anytime/no-return?multicity_transport=aircraft&transport=aircraft');
        
        
    });

    it('should add From and To destinations', () => {
        browser.setTimeout({'implicit' : 5000});   
        Helpers.clickElementOnce(MainPage.getFromTextbox());    
        browser.pause(5000);
        const fromDest='TXL';
        MainPage.getFromSearch().setValue(fromDest);
       //Click seleccionar value from
       Helpers.clickElementOnce(MainPage.getToTextbox());   
       const toDest='London'
       MainPage.getToSearch().setValue(toDest);
       browser.pause(10000);
       
       
       // MainPage.getFromTextbox().setValue(fromDest);
        

        //MainPage.getToTextbox().click();
        //browser.pause(5000);
    
    }); 
    
    /*it('should add people to flight', () => {
        browser.setTimeout({'implicit' : 5000});
        Helpers.clickElementOnce( MainPage.getPersonTypeButton());
        Helpers.clickElementOnce(MainPage.getAddAdultButton());
        Helpers.clickElementOnce(MainPage.getAddChildButton());
        Helpers.clickElementOnce(MainPage.getAddInfantButton()); 
        Helpers.clickElementOnce(MainPage.getSelectDoneButton());
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/-/-/anytime/no-return?adults=2&children=1&infants=1&multicity_transport=aircraft&transport=aircraft');
        
    
    });*/




  /*  it('should select departure date and set date', () => {
        browser.setTimeout({'implicit' : 5000});
        Helpers.clickElementOnce(MainPage.getSelectDepartureButton());
        browser.pause(5000);
        Helpers.clickElementOnce(MainPage.getSelectDepartureDate());
        browser.pause(2000);
        Helpers.clickElementOnce(MainPage.getSelectSetDatesButton());
        browser.pause(10000);  
    }); */


});


