# Test-exercise using Cypress in JS

In order to run the tests the following steps need to be taken: 

First to install cypress
```
npm install
```

Then request an access token from https://gorest.co.in/consumer/login

To execute the tests we need to pass the token as an environment variable "auth" replacing the Xs in the following command:

```
npx cypress run --env auth=XXXX
```
