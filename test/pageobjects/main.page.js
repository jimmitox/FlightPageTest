const Page = require("./page");

class mainPage extends Page{

   //Declare elemetents to use
    get flightType() {return $('p=One-way')}; 
    get FlightTypeButton(){return $('div=Return')};
    get cancelFromLabel() {return $ ('[data-Test=PlacePickerInputPlace-close]')};
    get fromLabel() {return $ ('[data-Test=SearchPlaceField-origin]')};
    get toLabel() {return $ ('[data-Test=SearchPlaceField-destination ]')};
    //PlacePickerInput-destination
    
    get departDateSelector() {return $ ('')};
    get adultsPlusButton() {return $ ('')};
    get childsPlusButton() {return $ ('')};
    get infantPlusButton() {return $ ('')};
    get searchButton() {return $ ('[data-Test=LandingSearchButton]')};
    get FromToText(){return $('')};
    get availableFlights(){return $$('')};
    //Declaring public  methods to use on other classes 

    getFlightTypeButton(){
        return this.FlightTypeButton.click();
    }

    getOneWayFlightButton(){
        return this.flightType.click();
    }
    getDeleteInitialFrom(){
        return this.cancelFromLabel.click();
    }


    getFromTextbox(){
        return this.fromLabel;
    }

    getToTextbox(){
        return this.toLabel;
    }

    getDepartureDate(){
        return this.departDateSelector;
    }

    getAddAdultButton(){
        return this.adultsPlusButton;
    }

    getAddChildButton(){
        return this.childsPlusButton;
    }

    getAddInfantButton(){
        return this.infantPlusButton;
    }

    getSearchButton(){
        return this.searchButton.click();
    }

    getValidateFromToLabel(){
        return this.FromToText;
    }

    getListAvailableFlights(){
        return this.availableFlights;
    }

}

module.exports = new mainPage();