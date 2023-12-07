*** Variables ***
${url}  http://testautomationpractice.blogspot.com
${name}  //*[@id="name"]
${phone}  //*[@id="phone"]
${address}  //*[@id="textarea"]
${email}  //*[@id="email"]
${gender}  //*[@id="female"]

*** Keywords ***
Start Case
    Open Browser  ${url}  chrome
Input form
    [Arguments]  @{my_agrs}
    Log  @{my_agrs}[0]
    #Click Element  ${name}
    #Input Text  ${name}  @{my_agrs}[0]
    #Click Element  ${email}
    #Input Text  ${my_agrs}[1]
    #Click Element  ${phone}
    #Input Text  ${my_agrs}[2]
    #Click Element  ${address}
    #Input Text  ${my_agrs}[3]

Teardown Case
    Close Browser
