module.exports = {
    'Google Search' : function (browser) {
      browser
        .url('https://www.google.com')
        .pause(5000)
        .waitForElementVisible('input[name="q"]', 4000)
        .setValue('input[name="q"]', 'hello world')
        .pause(5000)
        .keys(browser.Keys.ENTER)
        .waitForElementVisible('#resultStats', 4000)
        .assert.urlContains('q=hello+world')
        .end();
    }
  };
  