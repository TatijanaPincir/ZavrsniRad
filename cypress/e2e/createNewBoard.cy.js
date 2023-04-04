///<reference types="Cypress" />

import { loginPage } from "../page_object/login";
const userInfo = require("../fixtures/userInfo.json");
import { createABoard } from "../page_object/createBoard"
let id = ''



describe("Creating a new board", () => {
    it("create board", () => {
        cy.visit("/login");
        loginPage.loginInfo(userInfo.userEmail, userInfo.userPassword);

        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
        }).as("getBoardID");

        createABoard.AddBtn.click();
        createABoard.newBoardBtn.click();
        createABoard.boardTitle.type("novi bord");
        createABoard.nextBtn.click();
        createABoard.boardTypeTitle.should("contain", "Board Type");
        createABoard.boardTypeScrum.click();
        createABoard.nextBtn.click();
        createABoard.nextBtn.click();
        createABoard.nextBtn.click();
        createABoard.nextBtn.click();
        createABoard.sprintTitle.should("contain", "Sprint 1");


        cy.wait("@getBoardID").then((intercept) => {
            cy.log(intercept);
            id = intercept.response.body.id
            const statusCode = intercept.response.statusCode;
            const statusMessage = intercept.response.statusMessage;
            const boardName = intercept.response.body.name;
            const typeOfBoard = intercept.response.body.type;
            expect(statusCode).to.eq(201);
            expect(statusMessage).to.eq("Created");
            expect(boardName).to.eq('novi bord');
            expect(typeOfBoard).to.eq("scrum_board");
            expect(cy.url().should("contain", id))
        });

        it('delete board', () => {
            cy.visit("/login");
            loginPage.loginInfo(userInfo.userEmail, userInfo.userPassword);
            createABoard.getBoardBtn(id).click()
            createABoard.getBoardSettingsBtn(id).click()
            createABoard.deleteboard.click()
            createABoard.saveBtn.clic()
        })

    });
});

