var HomePage = function(){
	
	this.contractsSideBar = element(by.xpath("//div[@id='sidebar']/ul/li[@data-section='contracts']"));
	this.noContracts = element(by.xpath("//div[@v-selector='list-empty']/div/div/p[contains(text(),'No contracts added')]"));
	this.LogoutButton = element(by.xpath("//li/a[@href='/logout']"));	
	this.LogoutSuccesfull = element(by.xpath("//*[@id='menu-main-menu-en']/li[4]/a"));
	
	this.accessContracts = function(){
		this.contractsSideBar.click();
	}
	
	this.verifyNoContracts = function(){
		expect(this.noContracts);
	}
	
	this.clickLogoutButton = function(){
		this.LogoutButton.click();
	}
	
	this.checkLogout = function(){
		expect(this.LogoutSuccesfull);
	}
	
};

module.exports = new HomePage();