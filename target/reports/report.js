$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefiles/ForgotPssword.feature");
formatter.feature({
  "name": "To validate the forgot password functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "name": "To validate the forgot password with invalid mobilenumber",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should launch the chrome browser and load the facebook url",
  "keyword": "Given "
});
formatter.match({
  "location": "ForgotPasswordStepdefinition.user_should_launch_the_chrome_browser_and_load_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should Click the forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgotPasswordStepdefinition.userShouldClickTheForgotPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should type the invalid mobile Number for D Map",
  "rows": [
    {
      "cells": [
        "dhoni",
        "7856754671"
      ]
    },
    {
      "cells": [
        "raina",
        "8767768733"
      ]
    },
    {
      "cells": [
        "vijay",
        "7676738738"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ForgotPasswordStepdefinition.user_should_type_the_invalid_mobile_Number_for_D_Map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgotPasswordStepdefinition.userShouldClickTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should navigate to password reset recover page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgotPasswordStepdefinition.userShouldNavigateToPasswordResetRecoverPage()"
});
formatter.result({
  "status": "passed"
});
});