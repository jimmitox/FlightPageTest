const Page = require("./page");

class resultsFlights extends Page{

//Declare elemetents to use
    get availableFlights(){return $$('')};
    get loadMoreButton(){return $('//div[contains(text(),"Load more")]')}; //div=Load More
    

//Declaring public  methods to use on other classes 
    getVisibilityLoadMoreBtn(){
        return this.loadMoreButton;
    }

}

module.exports = new resultsFlights();