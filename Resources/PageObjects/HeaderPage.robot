*** Settings ***
Library  SeleniumLibrary
Variables  ../webElements.py
*** Variables ***
#${search_text}  mobile
#@{search_text}   book   mobile   robot
#&{search_text}   abc=book   bcd=mobile   cde=robot
#${HeaderPageSearchFieldElement}
*** Keywords ***
Search text
    [Arguments]  ${search_text}
    #Click Link  link:Sell
    Click Link  partial link:Seller
    #Input Text  ${HeaderPageSearchFieldElement}  ${search_text}
    #Input Text  id:gh-ac  ${search_text.cde}
    #Press Keys  ${HeaderPageSearchButtonElement}  [Return]