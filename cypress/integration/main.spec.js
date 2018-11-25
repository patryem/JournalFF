describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'JournalFF')
  })

  describe('EntryWindow', () => {
    it('opens Entrywindow', () => {
      cy.get('[data-cy=Button]')
        .contains('New Entry')
        .click()

      cy.get('[data-cy=EntryWindow]')
        .contains('Submit')
        .click()
    })
  })
})
