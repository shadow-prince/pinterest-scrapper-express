---
description: This is a quick reference to getting started with Bash scripting.
---

# Intro To Bash

## Bash Scripting

### Conditions

Note that `[[` is actually a command/program that returns either `0 (true) or 1 (false)` . Any program that obeys the same logic \(like all base utils, such as `grep(1)` or `ping(1)` \) can be used as condition, see examples.

| Condition | Description |
| :--- | :--- |
| \[\[ -z STRING \]\] | Empty string |
| \[\[ -n STRING \]\] | Not empty string |
| \[\[ STRING == STRING \]\] | Equal |
| \[\[ STRING != STRING \]\] | Not Equal |
| \[\[ NUM -eq NUM \]\] | Equal |
| \[\[ NUM -ne NUM \]\] | Not equal |
| \[\[ NUM -lt NUM \]\] | Less than |
| \[\[ NUM -le NUM \]\] | Less than or equal |
| \[\[ NUM -gt NUM \]\] | Greater than |
| \[\[ NUM -ge NUM \]\] | Greater than or equal |
| \[\[ STRING =~ STRING \]\] | Regexp |
| \(\( NUM &lt; NUM \)\) | Numeric conditions |

### Functions

Note that `[[` is actually a command/program that returns either `0` \(true\) or `1` \(false\). Any program that obeys the same logic \(like all base utils, such as `grep(1)` or `ping(1)`\) can be used as condition.

| Condition | Description |
| :--- | :--- |
| \[\[ -z STRING \]\] | Empty string |
| \[\[ -n STRING \]\] | Not empty string |
| \[\[ STRING == STRING \]\] | Equal |
| \[\[ STRING != STRING \]\] | Not Equal |
| \[\[ NUM -eq NUM \]\] | Equal |
| \[\[ NUM -ne NUM \]\] | Not equal |
| \[\[ NUM -lt NUM \]\] | Less than |
| \[\[ NUM -le NUM \]\] | Less than or equal |
| \[\[ NUM -gt NUM \]\] | Greater than |
| \[\[ NUM -ge NUM \]\] | Greater than or equal |
| \[\[ STRING =~ STRING \]\] | Regexp |
| \(\( NUM &lt; NUM \)\) | Numeric conditions |

