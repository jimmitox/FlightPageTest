
class passangersDetails{
//Declare elemetents to use  
    get contactText(){return $('span=Contact details')};
    get emailTextBox(){return $('[data-test=ContactEmail]')};
    get inputEmailTextBox(){return $('[name=email]')};
    get phoneTextBox(){return $('[data-test=ContactPhone]')};//.$('type=text')
    get inputPhoneTextBox(){return $ ('[name=phone]')}
    get firstNameTextBox(){return $('[data-test=ReservationPassenger-FirstName]').$('[type=text]')};
    get lastNameTextBox(){return $('[data-test=ReservationPassenger-LastName]').$('[type=text]')};
    get nationalityDropDown(){return $('[data-test=ReservationPassenger-nationality]')};
    get countryText(){return $('//select[@name="nationality"]//option[2]')};
    get genderDropDown(){return $('//select[@name="title"]')};
    get genderText(){return $("//option[contains(text(),'Male')]")};
    get monthDropDown(){return $('//select[@name="birthMonth"]')};
    get monthText(){return $('//select[@name="birthMonth"]//option[contains(text(),"September")]')};
    get dayTextBox(){return $('[name=birthDay]')};
    get yearTextBox(){return $('[name=birthYear]')};
    get passportIDTextBox(){return $('[name=idNumber]')};
    get noExpiryCheckBox(){return $('span=No expiry')};
    get continueButton(){return $('[data-test=StepControls-passengers-next]')};
   
//Declaring public  methods to use on other classes 

    getVisibleContactTextBox(){
        return this.contactText;
    }
    getSelectEmailTextBox(){
        return this.emailTextBox;
    }
    getInputEmail(){
        return this.inputEmailTextBox;
    }
      
    getSelectPhoneTextBox(){
        return this.phoneTextBox;
    }
    getInputPhone(){
        return this.inputPhoneTextBox;
    }
    getSelectFirstNameTextBox(){
        return this.firstNameTextBox;
    }
    getSelectLastNameTextBox(){
        return this.lastNameTextBox;
    }
    getSelectNationalityDropdown(){
        return this.nationalityDropDown;
    }
    getSetCountryTextBox(){
        return this.countryText;
    }
    getGenderDropdown(){
        return this.genderDropDown;
    }
    getSetGenderTextBox(){
        return this.genderText;
    }
    getMonthDropdown(){
        return this.monthDropDown;
    }
    getSetMonthTextBox(){
        return this.monthText;
    }
    getSelectDayTextBox(){
        return this.dayTextBox;
    }
    getSelectYearTextBox(){
        return this.yearTextBox;
    }
    getSelectPassportIDTextBox(){
        return this.passportIDTextBox;
    }
    getNotExpireCheckBox(){
        return this.noExpiryCheckBox;
    }
    getSelectContinueButton(){
        return this.continueButton;
    }

}

module.exports = new passangersDetails();