*** Settings ***
Library  SeleniumLibrary
*** Keywords ***

*** Test Cases ***
For loop testcase
    Open Browser  http://www.google.com  chrome
    sleep  5s
    Input text  //*[@id="APjFqb"]  Facebook
    Press Keys  //div[@class='FPdoLc lJ9FBc']//input[@name='btnK']  [Return]

    @{allWebElements}=  Get WebElements  //*[@id="rso"]

    FOR  ${element}  IN  @{allWebElements}
        ${text}  Get Text  ${element}
    END
    Close Browser

