const checkForURL = require("../src/client/js/nameChecker")
describe("Testing functionality", () => {
    test("Testing checkForURL() function", () => {      
           expect(checkForURL).toBeDefined()
});
    test("checkForURL() function return true ", () => {      
           expect(checkForURL('https://www.google.com/')).toBeTruthy()
});
    test("checkForURL() function return false", () => {      
           expect(checkForURL('Testing')).toBeFalsy()
});

});