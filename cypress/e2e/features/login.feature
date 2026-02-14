

Feature: Login Functionality

Scenario Outline: Login with multiple users
  Given User is on login page
  When User enters username "<username>" and password "<password>"
  Then Dashboard should be displayed for username "<username>" and password "<password>"

Examples:
  | username | password |
  | Admin    | admin123 |
  | Admin    | wrong123 |

  