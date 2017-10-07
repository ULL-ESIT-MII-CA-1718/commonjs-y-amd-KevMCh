REQUIRE = require(__dirname + "/require.js");

var weekDay = REQUIRE("day-name");
console.log(weekDay.name(3));
console.log(weekDay.number("Sunday"));
