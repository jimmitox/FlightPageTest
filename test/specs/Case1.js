
const MainPage = require('../pageobjects/main.page');
const Helpers =  require('../helpers/functions');
const { getFromSearch } = require('../pageobjects/main.page');
const ResultsFlightsPage = require('../pageobjects/resultsflights.page');

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
        Helpers.clickElementOnce(MainPage.getSelectFromCountry());
        Helpers.clickElementOnce(MainPage.getToTextbox());   
        const toDest='London'
        MainPage.getToSearch().setValue(toDest);
        Helpers.clickElementOnce(MainPage.getSelectToCountry());
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/berlin-tegel-berlin-germany/london-united-kingdom/anytime/no-return?multicity_transport=aircraft&transport=aircraft');
    
    }); 
    
    it('should add people to flight', () => {
        browser.setTimeout({'implicit' : 5000});
        Helpers.clickElementOnce( MainPage.getPersonTypeButton());
        Helpers.clickElementOnce(MainPage.getAddAdultButton());
        Helpers.clickElementOnce(MainPage.getAddChildButton());
        Helpers.clickElementOnce(MainPage.getAddInfantButton()); 
        Helpers.clickElementOnce(MainPage.getSelectDoneButton());
        browser.pause(5000);
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/berlin-tegel-berlin-germany/london-united-kingdom/anytime/no-return?adults=2&children=1&infants=1&multicity_transport=aircraft&transport=aircraft');
        
    
    });

    it('should select departure date and set date', () => {
        browser.setTimeout({'implicit' : 5000});
        Helpers.clickElementOnce(MainPage.getSelectDepartureButton());
        browser.pause(5000);
        MainPage.getSelectDepartureDate().waitForClickable({timeout:1000});
        Helpers.clickElementOnce(MainPage.getSelectDepartureDate());
        browser.pause(5000);
        Helpers.clickElementOnce(MainPage.getSelectSetDatesButton());
        browser.pause(5000);  
        expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/berlin-tegel-berlin-germany/london-united-kingdom/2020-09-15/no-return?adults=2&children=1&infants=1&multicity_transport=aircraft&transport=aircraft');
    }); 

    it('should select search button and validate destination page', () => {
        MainPage.getSearchButton().waitForClickable({timeout:1000});
        Helpers.clickElementOnce(MainPage.getSearchButton());
        expect(browser).toHaveUrl('https://www.kiwi.com/us/search/results/berlin-tegel-berlin-germany/london-united-kingdom/2020-09-15/no-return?adults=2&children=1&infants=1&multicity_transport=aircraft&transport=aircraft');
       
    });


    it('should validate if flights are available', () => {
        
       ResultsFlightsPage.getVisibilityLoadMoreBtn().waitForDisplayed({timeout:30000});   
       expect(ResultsFlightsPage.getVisibilityLoadMoreBtn()).toBeDisplayed();
       //console.log('chaval' + ResultsFlightsPage.getVisibilityLoadMoreBtn().getText());
       
    });


});


