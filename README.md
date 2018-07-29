# Budgetapp
## Personal budget application using only ES6, webpack & axios to be used with json-server api (budgetapi)
7/29/18 progress:
- set up budgetapi repo and '/Transactions' json-server endpoint on localhost:3000 containing json data
- making GET call to budgetapi from budget-app to retrieve transactions json
- parsing json data and formatting to display all transactions from current json-server snapshot in db.json

To do next: 
- install Papa Parse: https://www.papaparse.com/ to set up functionality to upload new csv files with bank transactions
- POST uploaded csv file as json data to json-server
- display updated date on page

Plan: 
- Provide way for transaction data to be sorted into budget categories and calculate spending per category
- Create calendar/timeline for upcoming/recurring bills and income
- Calculate projected spending per category based on historical data
- Allow user to manually adjust projected amounts in budget plan
- Allow user to input new/upcoming bills or spending
- Automatically adjust projections based on input
- Provide charts/graphs to display spending and projections overview
