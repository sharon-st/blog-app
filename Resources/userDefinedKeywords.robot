*** Settings ***
Library  SeleniumLibrary
Resource  ./PageObjects/HeaderPage.robot
*** Variables ***
#${search_prefix}  results for

*** Keywords ***
Verify text
    [Arguments]  ${search_prefix}  ${search_text}
    Page Should Contain  ${search_prefix} ${search_text}

Apply Auction filter
    Click Element  //span[@class='srp-format-tabs-h2'][normalize-space()='Auction']
    #//*[@id="mainContent"]/div[1]/div[2]/div[1]/div[2]/div[1]
    #Mouse Down  //span[@class='srp-format-tabs-h2'][normalize-space()='Auction']
    #Click Element  //*[@id="mainContent"]/div[1]/div[2]/div[1]/div[2]/div[2]