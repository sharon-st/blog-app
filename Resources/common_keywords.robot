*** Settings ***
Library  SeleniumLibrary
*** Variables ***
#Dictionaries variables below
#${env}  dev
#{url}  qa=http://qa.demo.com  uat=http://uat.demo.com  dev=http://dev.demo.com
*** Keywords ***
Start testcase
    #Open Browser  ${url.${env}}  chrome
    Open Browser  http://www.ebay.com  chrome
    Maximize Browser Window

End testcase
    Close Browser