var WeFoxPage = function(){
	
	this.weFoxWelcome =  element(by.xpath("//h1[@class='wf-v-login--title wf-u-font-bold']"));
	
	this.get = function(url){
		browser.get(url);
	};
	
	this.quit = function(){
		browser.quit;
	};
	
	this.sleep = function(time){
		browser.sleep(time);
	}
	
	this.verifyPageLoaded = function(){
		expect(this.weFoxWelcome.getText()).toEqual("Jetzt anmelden");
	};
	
	this.ManageTimeouts = function(){
		browser.manage().timeouts().implicitlyWait(5000);
	};
	
	this.ignoreSynchronization = function(){
		browser.ignoreSynchronization=true;
	};
	
	this.maximizeWindow = function(){
		browser.manage().window().maximize();
	};
	
};

module.exports = new WeFoxPage();