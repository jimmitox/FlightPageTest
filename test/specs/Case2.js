const Helpers =  require('../helpers/functions');
const ResultsFlightsPage = require('../pageobjects/resultsflights.page');

//Starting here comment or uncomment code to run this Case /* */

describe('Case 2', () => {
    it('should validate results are available when searching', () => {
        //browser.setTimeout({'implicit' : 10000});
        ResultsFlightsPage.getVisibilityLoadMoreBtn().waitForDisplayed({timeout:30000});   
        expect(ResultsFlightsPage.getVisibilityLoadMoreBtn()).toBeDisplayed();
       // console.log('Dinosaur' + ResultsFlightsPage.getVisibilityLoadMoreBtn().getText());
                
    });
    it('should select bus as transportation and validate results', () => {
        //browser.pause(5000);
        ResultsFlightsPage.getSelectFlightCheckBox().waitForDisplayed({timeout:10000});
        Helpers.clickElementOnce(ResultsFlightsPage.getSelectFlightCheckBox());
        //console.log('Cow' + ResultsFlightsPage.getSelectFlightCheckBox().getText());    
        ResultsFlightsPage.getSelectTrainCheckBox().waitForDisplayed({timeout:10000});
        Helpers.clickElementOnce(ResultsFlightsPage.getSelectTrainCheckBox());
        //console.log('Rooster' + ResultsFlightsPage.getSelectTrainCheckBox().getText());    
        ResultsFlightsPage.getBusErrorMessage().waitForDisplayed({timeout:10000});
        //console.log('Rooster' + '' + ResultsFlightsPage.getBusErrorMessage().getText());
        expect (ResultsFlightsPage.getBusErrorMessage()).toHaveTextContaining('It looks like you recently');

    });

    it('should select train as transportation and validate available dates ', () => {
        ResultsFlightsPage.getSelectTrainCheckBox().waitForDisplayed({timeout:10000});
        Helpers.clickElementOnce(ResultsFlightsPage.getSelectTrainCheckBox());
        ResultsFlightsPage.getSelectBusCheckBox().waitForDisplayed({timeout:10000});
        Helpers.clickElementOnce(ResultsFlightsPage.getSelectBusCheckBox());
        ResultsFlightsPage.getVisibilityLoadMoreBtn().waitForDisplayed({timeout:30000});   
        expect(ResultsFlightsPage.getVisibilityLoadMoreBtn()).toBeDisplayed();
                
    });


});


