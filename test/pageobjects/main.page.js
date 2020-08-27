const Page = require("./page");

class mainPage extends Page{

   //Declare elemetents to use
    get flightType() {return $('p=One-way')}; 
    get FlightTypeButton(){return $('div=Return')};
    get cancelFromLabel() {return $ ('[data-Test=PlacePickerInputPlace-close]')};
    get fromLabel() {return $ ('[data-Test=SearchPlaceField-origin]')};
    get fromLabelTextBox() {return $('[data-test=SearchField-input]')};
    get toLabel() {return $ ('[data-Test=SearchPlaceField-destination ]')}; 
    get toLabelTextBox(){ return $('[data-test=PlacePickerInput-destination]').$('[data-test=SearchField-input]')};
    get PersonTypeButton(){return $('[data-Test=PassengersField]')};
    get departureDateButton() {return $ ('[data-test=SearchDateInput]')};
    get date() {return $('//body//div[@id="landingPage"]//div//div//div//div//div//div//div//div//div//div//div//div[2]//div[1]//div[3]//div[15]')}; //[data-test=CalendarDay-departureRange]').$('[data-value=2020-09-15]'
    get submitDateButton() {return $ ('[data-test=SearchFormDoneButton]')};
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

    getFromSearch(){
        return this.fromLabelTextBox;
    }

    getToTextbox(){
        return this.toLabel;
    }

    getToSearch(){
        return this.toLabelTextBox;
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
    getSelectDepartureButton(){
        return this.departureDateButton;
    }

    getSelectDepartureDate(){
        return this.date;
    }
    getSelectSetDatesButton(){
        return this.submitDateButton;
    }


}

module.exports = new mainPage();