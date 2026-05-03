Feature: Login Feature

    Background:
    Given I launch the application

   
    Scenario: Validate the title of the page 1
    When Enter the username "Yuaraj"
    And Enter the password "Aieuafuse"

    #testtwo
    Scenario: Validate the title of the page 2
    When Enter the username "Yuarajasdef"
    And Enter the password "Aieuafusevsdfd"
   

    #testthree
    Scenario: Validate the title of the page 3
    When Enter the username "Yuarajscsdds"
    And Enter the password "Aieuafusevdfgfdg"

     #testfour 
    Scenario: Validate the title of the page 4
    When Enter the details for the form
    |username|password|
    |YuvarajSSS|Admin123324|

     @smoke
    Scenario: Validate the title of the page 5
    When Enter the details for the form rowhash
    |username|YuvarajSSS|
    |password|Admin123324|
   
