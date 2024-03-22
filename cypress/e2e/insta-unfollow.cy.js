import { USER, PASSWORD, UNFOLLOWER_COUNT } from '../support/constants'

describe('instagram-unfollow', function() {
  it('random-unfollow', function() {
    cy.visit('https://www.instagram.com')

    cy.get('div').contains('Log In').click()
    
    cy.get('input[name="username"]').type(USER)
    cy.get('input[name="password"]').type(PASSWORD)
    cy.get('button[type="submit"]').click()

    cy.get(`img[alt="${USER}'s profile picture"]`).click()

    cy.get('.class', '_ac2a').click()

    for (let i = 0; i < UNFOLLOWER_COUNT; i++) {
      cy.wait(2000)
      cy.get('button').contains('Following').click()
    }

  })
});