*** Settings ****
Resource  ../../Resources/common_keywords.robot
Resource  ../../Resources/userDefinedKeywords.robot
Resource  ../../Resources/PageObjects/HeaderPage.robot

Test Setup  Start testcase
Test Teardown  End testcase

*** Variables ***

*** Test Cases ***
Verify ebay search and filter for robot
    Search text  robot
    Verify text  results for  robot
    Apply Auction filter

Verify ebay search and filter for books
    Search text  books
    Verify text  results for  books
    Apply Auction filter

