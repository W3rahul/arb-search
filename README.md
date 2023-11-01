Project Name: arb-search

Description: in this project, we are validating the time between searching the products and getting the results. I have executed the scripts locally and got the results in the console. 

Project structure info:
src/common/TestData; In this file have locators and keywords for applications that we want to search.
src/tests
/TC01-01: In this Script normally perform the search and calculate the time up to get the results for the next.  appreviewbot website.
/TC01-02: In this Script first select the app store then select the country and pass the keyword to get the results for next. appreviewbot website.
/TC02-01: In this Script normally perform the search and calculate the time up to get the results for the appreviewbot website.
/TC02-02: In this Script first select the app store then select the country and pass the keyword to get the results for the appreviewbot website.

How to run: to run this script use "npm run TC01-01" This command will execute the first Script accordingly and get the time in seconds.

"npm run TC01-01" = Search for next. appreviewbot.
"npm run TC01-02" = filter and search for next. appreviewbot.
"npm run TC02-01" = Search for appreviewbot.
"npm run TC02-02" = filter and search for appreviewbot. 

Results: After executing this in the console we can see the results in the sec format.
