Feature: Orange HRM Login Feature

    @login @HRM
    Scenario: user should be able to login using Valid Credentials
        Given User visits the Orange HRM website
        When User provides username
        And User provides password
        Then User clicks on Submit button to Login into HRM website