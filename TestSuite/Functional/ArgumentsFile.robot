*** Settings ****

*** Variables ***

*** Test Cases ***
Arguments logging testcase
    Arugments demo keywords  hello  world
*** Keywords ***
Arugments demo keywords
    [Arguments]  ${arg1}  ${arg2}
    Log  ${arg1}
    Log  ${arg2}
