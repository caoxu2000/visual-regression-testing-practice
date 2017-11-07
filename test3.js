var wdio = require("webdriverio");

var browser = wdio.remote({
	desiredCapabilities: {
		browserName: "chrome"
	}
}).init();

require('webdrivercss').init(browser);

var loginForm = {
    name: "Login Form",
    elem: "#signIn"
};

var submitBtn = {
	name: "Login Submit Button",
	elem: "button[type=\"submit\"]"
};

var libraryTableBody = {
	name: "Library Table Body",
	elem: ".library-browse-table tbody"
};

browser.url("https://app.riffyn.com")
    .webdrivercss("Login Form", loginForm)
    .webdrivercss("Submit Button", submitBtn)
    .waitForExist('input[name="email"]')
    .setValue('input[name="email"]', 'xxxxxx')
    .waitForExist('input[name="password"]')
    .setValue('input[name="password"]', 'xxxxxx')
    .waitForExist(submitBtn.elem)
    .click(submitBtn.elem)
    .pause(1000)
    .waitForExist('.library-browse-table tbody')
    .webdrivercss("Library tbody", libraryTableBody)
    .getUrl().then(function(url) {
        console.log("Page url is: " + url);
    })
    .end();
