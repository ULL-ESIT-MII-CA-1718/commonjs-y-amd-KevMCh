**Example of use:**

```
$ cat main.js
define = require(__dirname + "/amd.js");

define(["day-name"], function(weekDay) {
  console.log(weekDay.name(3));
});
```

**Example of Execution**

```
$ node main.js
Wednesday
```
