# SPA QA Automation Test

This project provides a *very* simple application that's sole purpose for being is to
have automation tests run on it. It's incredibly basic, has no styling and does a a
few things very badly. It should probably have routing and such...

I'll maybe add a few more things to test but at the moment we have a login and a drop down.

Username is `user1`
Password is `password1`

You can either run the app with `npm start` or go to 
[http://louishoughton.com/qa-automation-test](http://louishoughton.com/qa-automation-test)

## Tests

* Write a test that attempts to login with the wrong credentials and checks the failure 
message.

* Write a test that logs in successfully 

* Write a test that logs in successfully and chooses an option from the drop down and
checks the output is correct.

* Write a test that logs in successfully and makes sure the asynchronously loaded message
displays.

## Requirements

* Provide a Github or Bitbucket repo.

* Use any framework you like.

* I should be able to run your tests with a single command like `npm run functional-tests`.

* Code should be well structured

* Your code should not contain sensitive data like user names and passwords. Externalise
this data.
