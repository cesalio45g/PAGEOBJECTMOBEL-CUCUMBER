/// <reference types="Cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { loginPageElements } from '../PageObjects/PageActions/LoginPageActions';
const Login = new loginPageElements();

describe('Page Object Model Tutorial', function () {
   Given('User visits the Orange HRM website', function () {
      cy.visit(
         'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
      );
   });

   When('User provides username', function () {
      Login.enterUsername('Admin');
   });

   And('User provides password', function () {
      Login.enterPassword('admin123');
   });

   Then('User clicks on Submit button to Login into HRM website', function () {
      Login.clickLogin();
   });
});
