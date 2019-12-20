var LoginPage = function(){
	
	this.user_name = element(by.id("user_name"));
	this.password =  element(by.id("password"));
	this.loginButton = element(by.xpath("//button[@type='submit' and contains(text(),'Anmeldung')]"));
	this.weFoxLoginPassedImage = element(by.xpath("//img[@title='AUTOMATIC DE QA']"));	
	
	this.enterUserName = function(user){
		this.user_name.sendKeys(user);
	};
	
	this.enterPassword = function(pass){
		this.password.sendKeys(pass);
	};
	
	this.pressLoginbutton = function(){
		this.loginButton.click();
	};
	
	this.verifyLoginPassed = function(){
		expect(this.weFoxLoginPassedImage);
	};
	
};

module.exports = new LoginPage();