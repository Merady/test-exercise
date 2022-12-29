import createUser from "/cypress/fixtures/createUser.json"

const method = 'POST';
const url = 'https://gorest.co.in/public/v2/users/'
const auth = {
    'bearer':  Cypress.env('auth')
  };
const body = createUser;
const uuid = require("uuid");


describe('Basic Rest tests', () => {

    it('Create a new user', () => {
    const id = uuid.v4();
    body.email = id +"@randomemail.com"
    //Add unique email
    cy.request({method, url, body, auth})
    //make a POST request with updated request body
    .then((res) => {
        expect(res.body).to.have.property('email', body.email)
        //Confirm that user was created with the specific email assigned
        })
    })

    it('Create a new user and GET the same user', () => {
        const id = uuid.v4();
        body.email = id +"@randomemail.com"
        //Add unique email
        cy.request({method, url, body, auth})
        //make a POST request with updated request body
        .then((res) => {
            expect(res.body).to.have.property('email', body.email)
            //Confirm that user was created with the specific email assigned
            const userId = res.body.id
            //Take the user id from the response and append it to the URL
            cy.request({method:'GET', url: url + userId, body, auth})
            //GET user
            .then((res) => {
                expect(res.body).to.have.property('email', body.email)
                // Confirm returned user has the same email
            })
        })
    })

    it('Create a new user, DELETE the same user and attempt to GET the deleted user', () => {
        const id = uuid.v4();
        body.email = id +"@randomemail.com"
        //Add unique email
        cy.request({method, url, body, auth})
        //make a POST request with updated request body
        .then((res) => {
            expect(res.body).to.have.property('email', body.email)
            //Confirm that user was created with the specific email assigned
            const userId = res.body.id
            cy.request({method: 'DELETE', url: url + userId, body, auth})
            //Delete newly created user
            .then((res) => {
                expect(res.status).to.equal(204)
                expect(res.body).to.be.undefined
                // Confirm response status to equal "no content" and the response body to be empty
            })
            cy.request({method: 'GET', url: url + userId, body, auth, failOnStatusCode: false})
            //Try to GET the deleted user
            .then((res) => {
                expect(res.status).to.equal(404)
                expect(res.body).to.have.property("message", "Resource not found")
                // Confirm response status is 404 and response body states "not found"
            })
        })
    })

})