Feature: Sample feature file to test CBA web application

   @homeLoanRepayment
  Scenario Outline: To verify the total home loan repayment and total interest repayment in CBA Web application
    Given I launch the Url
    When I click on Repayments calculator
    Then I should be displayed with Home loan repayments calculator page
    And I provide loan amount details such as <amtToBorrow>, <timeperiod>, <repaymentType>, <interestType>
    And I click on Calculate button
    Then I should be displayed with <totalHomeLoan> and <totalInterestCharged> values
   Examples:
   |amtToBorrow|timeperiod|repaymentType|interestType|totalHomeLoan|totalInterestCharged|
   |80000  |19 |Principal and interest|2.69% p.a. Extra Home Loan 30% deposit|$102,266|$22,266|