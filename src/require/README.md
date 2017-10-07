**Example of use:**

```
$ cat main.js
REQUIRE = require(__dirname + "/require.js");

var weekDay = REQUIRE("day-name");
console.log(weekDay.name(3));
console.log(weekDay.number("Sunday"));
```

**Example of Execution**

```
$ node main.js
Wednesday
0
```
