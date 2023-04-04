class CreateBoard{
    get AddBtn(){
        return cy.contains("Add New");
    }
    get newBoardBtn (){
        return cy.contains("Add Board");
    }
    get newBoardTitle (){
        return cy.get("input[placeholder='Enter title...']")
    }

    get nextBtn (){
        return cy.get ("button[name='next_btn']")
    }
    get boardTitle () {
        return cy.get ("input[placeholder='Enter title...']")
      }
    
      get nextBtn (){
        return cy.get ("button[name='next_btn']")
      }
      get boardTypeScrum () {
        return cy.get ("span[name='type_scrum']")
      }
      get boardTypeTitle (){
        return cy.get ("h2[class='vs-c-modal__title']")
      }
    
    
      get sprintTitle(){
        return cy.get ("h2[class='vs-c-col__title']")
      }
    getBoardBtn(id){
    return cy.get(`a[href="/boards/${boardId}"]`)
    }
    getBoardSettingsBtn(id){
        return cy.get(`a[href="/boards/${boardId}/settings"]`)
        }
        get deleteboard (){
            return cy.get (':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn')
        }
        get saveBtn (){
            return cy.get ("button[name='save-btn']")
        }


      
    
    }
    
    
    export const createABoard = new CreateBoard();
