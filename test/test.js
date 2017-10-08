var should = require('should');
var assert = require('better-assert');

describe("Modules", function() {
  describe("CommonJS", function() {
    REQUIRE = require("../src/require/require.js");
    var weekDay = REQUIRE("./src/require/day-name");

    it("Day by number", function() {
      assert(weekDay.name(3) === "Wednesday");
    });

    it("Number of the day", function() {
      assert(weekDay.number("Sunday") === 0);
    });
  });

  describe("AMD", function() {
    define = require("../src/slow-loading-modules/amd.js");

    it("Day by number", function() {
      define(["./src/slow-loading-modules/day-name"], function(weekDay) {
        assert(weekDay.name(6) === "Saturday");
      });
    });

    it("Number of the day", function() {
      define(["./src/slow-loading-modules/day-name"], function(weekDay) {
        assert(weekDay.number("Sunday") === 0);
      });
    });
  });
});
