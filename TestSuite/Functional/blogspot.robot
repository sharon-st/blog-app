*** Settings ***
Library  SeleniumLibrary
Resource  ../../Resources/PageObjects/blogKeywords.robot

*** Variables ***
@{my_arg}  AnnaTaylor  anna.taylor@gmail.com  0403456325  22Bhatfield

*** Keywords ***

*** Test Cases ***
Input Name
    Start Case
    set selenium speed  2s
    Input form  @{my_arg}
    Teardown Case