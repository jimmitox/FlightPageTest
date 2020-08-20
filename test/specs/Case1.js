

const MainPage = require('../pageobjects/main.page');


describe('Case 1', () => {
    it('should select one-way button', () => {
        browser.setTimeout({'pageLoad': 10000});
        console.log('holis1')
        MainPage.getDeleteInitialFrom();
        MainPage.getFlightTypeButton();
        browser.pause(5000);
        MainPage.getOneWayFlightButton(); 


        browser.pause(10000);
        MainPage.getSearchButton();
       // MainPage.getFromTextbox().setValue('TXL');
       //browser.setTimeout({'implicit':10000}); 
       //MainPage.getToTextbox().setValue('LHR');
        
    

        //console.log('Holis Perro' + MainPage.getFlightTypeButton);
        browser.pause(5000);
        

        //expect(browser).toHaveUrl('https://www.kiwi.com/us/landing/san-jose-costa-rica/-/anytime/no-return?multicity_transport=aircraft&transport=aircraft');
        

        
        
    });






});


