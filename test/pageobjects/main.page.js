const Page = require("./page");

class mainPage extends Page{

   //Declare elemetents to use
   
    get flightsTab() {return $ ('')};
    get fromLabel() {return $ ('')};
    get toLabel() {return $ ('')};
    get departDateSelector() {return $ ('')};
    get adultsPlusButton() {return $ ('')};
    get childsPlusButton() {return $ ('')};
    get infantPlusButton() {return $ ('')};
    get searchButton() {return $ ('')};
    get FromToText(){return $('')};
      
    //Declaring public  methods to use on other classes 

    getflightsTab(){
        return this.flightsTab;
    }

    getFromLabel(){
        return this.fromLabel;
    }

    getToLabel(){
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


}

module.exports = new mainPage();