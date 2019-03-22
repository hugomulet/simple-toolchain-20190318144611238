module.exports = {
    'Google Search' : function (browser) {
        var AddressUrl = process.env.APP_URL;
        console.log("AdressUrl:", AddressUrl);
      browser
        .url(AddressUrl)
        .getText("body > table:nth-child(4) > tbody > tr:nth-child(1) > th", function(result) {
          this.assert.equal(typeof result, "object");
          this.assert.equal(result.status, 0);
          this.assert.equal(result.value, "Nom d'utilisateur");
        })
        .pause(999)
        .getText("body > table:nth-child(4) > tbody > tr:nth-child(2) > th", function(result) {
          this.assert.equal(typeof result, "object");
          this.assert.equal(result.status, 0);
          this.assert.equal(result.value, "Mot de passe");
        })
        .pause(999)
        .isVisible('body > table:nth-child(1) > tbody > tr > td:nth-child(1) > img', function(result) {
          this.assert.equal(typeof result, "object");
          this.assert.equal(result.status, 0);
          this.assert.equal(result.value, true);
        })
        .pause(999)
        .assert.urlContains(AddressUrl)
        .end();
    }
  };
  