const Page = require("./page");

class resultsFlights extends Page{

//Declare elemetents to use
    get loadMoreButton(){return $('//div[contains(text(),"Load more")]')}; //div=Load More
    get flightCheckBox(){return $('span=Flight')};
    get busCheckBox(){return $('span=Bus')};
    get trainCheckBox(){return $('span=Train')};
    get busResultsMessage() {return $('p=It looks like you recently applied some filters. Reset them below to get results.')};
    

//Declaring public  methods to use on other classes 
    getVisibilityLoadMoreBtn(){
        return this.loadMoreButton;
    }
    getSelectFlightCheckBox(){
        return this.flightCheckBox;
    }
    getSelectBusCheckBox(){
        return this.busCheckBox;
    }
    getSelectTrainCheckBox(){
        return this.trainCheckBox;
    }

    getBusErrorMessage(){
        return this.busResultsMessage;
    }




}

module.exports = new resultsFlights();