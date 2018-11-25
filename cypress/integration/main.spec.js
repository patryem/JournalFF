describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'JournalFF')
  })

  describe('JournalCard', () => {
    it('Has date', () => {
      cy.get('[data-cy=Date]').should('have.length', 1)
    })

    describe('EntryWindow', () => {
      it('Opens and closes without Entry', () => {
        cy.get('[data-cy=Button]')
          .contains('New Entry')
          .click()

        cy.get('[data-cy=EntryWindow]')
          .contains('Submit')
          .click()
      })

      it('Adds new Entry', () => {
        cy.get('[data-cy=Button]')
          .contains('New Entry')
          .click()

        cy.get('[data-cy=EntryTag]')
          .contains('work')
          .click()

        cy.get('[data-cy=EntryTag]')
          .contains('normal')
          .click()

        cy.get('[data-cy=EntryTag]')
          .contains('happy')
          .click()

        cy.get('[data-cy=EntryWindow]')
          .contains('Submit')
          .click()

        cy.get('[data-cy=JournalCard]')
          .contains('work')
          .contains('normal')
          .contains('happy')
      })
    })
  })
})
