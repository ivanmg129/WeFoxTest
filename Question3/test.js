
var WeFoxPage = require("./Pages/WeFoxPage");

var user = "aqawefox+testtecnico@wefoxgroup.com";
var password = "qwertyasdf";

describe("Acces Wefox ", function(){
	WeFoxPage.ignoreSynchronization();
	WeFoxPage.ManageTimeouts();
	WeFoxPage.maximizeWindow();
   
	it("Go to the WeFox login page ", function(){
		WeFoxPage.get("https://my.wefox.de/login");
		WeFoxPage.verifyPageLoaded();
		console.log("WeFox Page Open succesffully")
	});
  
	var LoginPage = require("./Pages/LoginPage");
 
	it("Login to Home page ", function(){
		LoginPage.enterUserName(user);
		LoginPage.enterPassword(password);
		LoginPage.pressLoginbutton();
		WeFoxPage.sleep(5000);
		LoginPage.verifyLoginPassed();
		console.log("Login to Home Page was succesffully")
	});
	
	var HomePage = require("./Pages/HomePage");

	it("Go to the Contracts ", function(){
		WeFoxPage.sleep(2000);
		HomePage.accessContracts();
		WeFoxPage.sleep(2000);
		HomePage.verifyNoContracts();
		WeFoxPage.sleep(2000);
		console.log("Contracts Open succesffully")
	});
	
	var ProfilePage = require("./Pages/ProfilePage");
  
	it("Go to Profile ", function(){
		ProfilePage.accessProfile();
		ProfilePage.verifyProfileHome();
		WeFoxPage.sleep(2000);
		ProfilePage.accessProfileDetailData();
		WeFoxPage.sleep(2000);
		ProfilePage.validateEmail(user);
		ProfilePage.printProfileDetailsData();
		WeFoxPage.sleep(2000);
		console.log("Profile Open succesffully")	
	});
	
	it("Logout page ", function(){
		HomePage.clickLogoutButton();
		WeFoxPage.sleep(2000);
		HomePage.checkLogout();
		console.log("Logout succesffully")	
	});

});

