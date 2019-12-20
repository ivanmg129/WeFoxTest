var ProfilePage = function(){
	
	this.profileSideBar = element(by.xpath("//div[@id='sidebar']/ul/li[@data-section='account']"));
	this.profileDetails = element(by.xpath("//div/a[@data-track-event-action='PersonalDetails']"));
	this.profile_first_name = element(by.id("first_name"));
	this.profile_last_name = element(by.id("last_name"));
	this.profile_street = element(by.id("street"));
	this.profile_zip_code = element(by.id("zip_code"));
	this.profile_city = element(by.id("city"));
	this.profile_birthdate = element(by.id("birthdate"));
	this.profile_email = element(by.id("email"));
	this.profile_phone = element(by.id("phone"));
	
	this.accessProfile = function(){
		this.profileSideBar.click();
	}
	
	this.verifyProfileHome = function(){
		expect(this.profileDetails.getText()).toContain("Personal details");
	}
	
	this.accessProfileDetailData = function(){
		this.profileDetails.click();
	}
	
	this.validateEmail = function(email){
		expect(this.profile_email.getAttribute("value")).toBe(email);
	}
	
	this.printProfileDetailsData = function(){
			
		this.profile_first_name.getAttribute("value").then(function(text){
			console.log('PROFILE DETAIL DATA');
			console.log('----------------------------------');
			console.log('First name:', text);
			
		});
		this.profile_last_name.getAttribute("value").then(function(text){
			console.log('Last name:', text);
			//sampleObject[1]=text;
		});
		this.profile_street.getAttribute("value").then(function(text){
			console.log('Street:', text);
		});
		this.profile_zip_code.getAttribute("value").then(function(text){
			console.log('Postal code:', text);
		});
		this.profile_city.getAttribute("value").then(function(text){
			console.log('City:', text);
		});
		this.profile_birthdate.getAttribute("value").then(function(text){
			console.log('Birthdate:', text);
		});
		this.profile_email.getAttribute("value").then(function(text){
			console.log('Email:', text);
		});
		this.profile_phone.getAttribute("value").then(function(text){
			console.log('Phone:', text);
			console.log('----------------------------------');
		});
	}
	
};

module.exports = new ProfilePage();