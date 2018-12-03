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

      describe('New Entry', () => {
        it('Adds a new entry', () => {
          cy.get('[data-cy=Button]')
            .contains('New Entry')
            .click()

          cy.get('[data-cy=EntryTag]')
            .contains('work')
            .click()

          cy.get('[data-cy=Separator]').should('have.length', 2)

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

      describe('Edit Entry', () => {
        it('Edits entrys', () => {
          cy.get('[data-cy=Button]')
            .contains('Edit')
            .click()

          cy.get('[data-cy=EntryTag]')
            .contains('sport')
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
            .contains('sport')
            .contains('normal')
            .contains('happy')
        })
      })

      describe('Add new Task', () => {
        it('Check if tasks in use are forbidden', () => {
          cy.get('[data-cy=Button]')
            .contains('New Task')
            .click()
          cy.get('[data-cy=Input]').type('work')

          cy.get('[data-cy=Checkbox]')
            .contains('Amount')
            .click()

          cy.get('[data-cy=Checkbox]')
            .contains('Energy')
            .click()

          cy.get('[data-cy=Checkbox]')
            .contains('Mood')
            .click()

          cy.get('[data-cy=Button]')
            .contains('Add')
            .click()

          cy.get('div').contains('vergeben')
        })

        it('Check if a new task is added correctly', () => {
          cy.get('[data-cy=Button]')
            .contains('New Task')
            .click()

          cy.get('[data-cy=Input]')
            .clear()
            .type('build')

          cy.get('[data-cy=Checkbox]')
            .contains('Mood')
            .click()

          cy.get('[data-cy=Button]')
            .contains('Add')
            .click()

          cy.get('[data-cy=Button]')
            .contains('New Entry')
            .click()

          cy.get('[data-cy=EntryTag]')
            .contains('build')
            .click()

          cy.get('[data-cy=EntryTag]')
            .contains('happy')
            .click()

          cy.get('[data-cy=EntryWindow]')
            .contains('Submit')
            .click()

          cy.get('[data-cy=JournalCard]')
            .contains('build')
            .contains('happy')
        })
      })
    })
  })
})
