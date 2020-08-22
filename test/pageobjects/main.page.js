const Page = require("./page");

class mainPage extends Page{

   //Declare elemetents to use
    get flightType() {return $('p=One-way')}; 
    get FlightTypeButton(){return $('div=Return')};
    get cancelFromLabel() {return $ ('[data-Test=PlacePickerInputPlace-close]')};
    get fromLabel() {return $ ('[data-Test=SearchPlaceField-origin]')};
    get toLabel() {return $ ('[data-Test=SearchPlaceField-destination ]')};  //PlacePickerInput-destination
    get PersonTypeButton(){return $('[data-Test=PassengersField]')};
    get departDateSelector() {return $ ('')};
    get adultsPlusButton() {return $('[data-test=PassengersRow-adults]').$('[aria-label=increment]')};
    get childsPlusButton() {return $('[data-test=PassengersRow-children]').$('[aria-label=increment]')};
    get infantPlusButton() {return $('[data-test=PassengersRow-infants]').$('[aria-label=increment]')}; ;
    get doneButton(){return $('div=Done')};
    get searchButton() {return $ ('[data-Test=LandingSearchButton]')};
    get FromToText(){return $('')};
    get availableFlights(){return $$('')};
    //Declaring public  methods to use on other classes 

    getFlightTypeButton(){
        return this.FlightTypeButton;
    }

    getOneWayFlightButton(){
        return this.flightType;
    }
    getDeleteInitialFrom(){
        return this.cancelFromLabel;
    }

    getPersonTypeButton(){
        return this.PersonTypeButton;
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
        return this.searchButton;
    }

    getValidateFromToLabel(){
        return this.FromToText;
    }

    getListAvailableFlights(){
        return this.availableFlights;
    }

    getSelectDoneButton(){
        return this.doneButton;
    }


}

module.exports = new mainPage();