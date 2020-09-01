
class PaymentPage {
//Declare elemetents to use  
get paymentText(){return $('span=Pay now for peace of mind. Save later if you need to make a necessary change to your itinerary.')};
get fareSaverButton(){return $('[data-test=fareTypesSaverButton]')};
get yesButton(){return $('[data-test=fareTypesSaverModalContinue]')};
get continueBasicButton(){return $('[data-test=servicePackagesBasicButton]')};
get ContinueButtonCustomizeUrTrip(){return $('//div[contains(text(),"Continue")]')};
get invoiceText(){return $('h2=Invoice details')};
get passangerNamePayment() {return $('span=Mr Mark Hamill')};





//Declaring public  methods to use on other classes 

getTextPaymentSpan(){
    return this.paymentText;
}
getSelectFareSaverButton(){
    return this.fareSaverButton;
}
getSelectYesButton(){
    return this.yesButton;
}
getSelectContinueBasicButton(){
    return this.continueBasicButton;
}
getSelectContinueButtonCustomizeTripPage(){
    return this.ContinueButtonCustomizeUrTrip;
}
getTextInvoiceDetails(){
    return this.invoiceText;
}
getPassangerNameDetails(){
    return this.passangerNamePayment;
}

}

module.exports = new PaymentPage();