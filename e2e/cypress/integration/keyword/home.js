import { Given, Then, When} from "cypress-cucumber-preprocessor/steps";
import { selector } from "postcss-selector-parser";

Given("ผู้ใช้เข้าหน้า home", () => {
  cy.visit("http://localhost:3000/").wait(1000);
});

Then("ระบบแสดงข้อมูลหน้า home", () => {
  cy.get("[data-cy=firstname]").invoke("text").should("eq", "Sirirak ");
  cy.get("[data-cy=lastname]").invoke("text").should("eq", "Witoon");
});

Given("ผู้ใช้กดเข้าไปที่หน้า about me", () => {
  cy.visit("http://localhost:3000/").wait(1000);
});

When("ผู้ใช้งานทำการเลือกไปที่หน้า resume และทำการกดเลือกไปที่ about me",
  () => {
    cy.get("[data-cy=resume]").click({ force: true });
    cy.get("[data-cy=aboutme]").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/resume");
  });

Then("ระบบแสดงข้อมูลเกี่ยวกับประวัติส่วนตัว",()=>{
    cy.get("[data-cy=about]").invoke("text").should("eq","ABOUT");
    cy.get("[data-cy=me]").invoke("text").should("eq","ME");

})

Given("ผู้ใช้กดเข้าไปที่หน้า education",()=>{
    cy.visit("http://localhost:3000/")
})

When("ผู้ใข้งานทำการเลือกไปที่หน้า resume และทำการกดเลือกไปที่ education",()=>{
    cy.get("[data-cy=resume]").click({ force: true });
    cy.get("[data-cy=educationButton]").click({ force: true });
    cy.url().should("eq", "http://localhost:3000/education");
})

Then("ระบบแสดงข้อมูลเกี่ยวกับประวัติการศึกษา",()=>{
    cy.get("[data-cy=education]").invoke("text").should("eq","Education");
    cy.get("[data-cy=background]").invoke("text").should("eq","background");
})