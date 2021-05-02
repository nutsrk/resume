import {Given,Then} from "cypress-cucumber-preprocessor/steps"

Given("ผู้ใช้เข้าหน้า home",()=>{
    cy.visit("http://localhost:3000/").wait(1000)
})

Then("ระบบแสดงข้อมูลหน้า home",()=>{
    cy.get("[data-cy=firstname]").invoke("text").should("eq","Sirirak ")
    cy.get("[data-cy=lastname]").invoke("text").should("eq","Witoon")

})
