// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by methods-entries.js.
import { name as packageName } from "meteor/methods-entries";

// Write your tests here!
// Here is an example.
Tinytest.add('methods-entries - example', function (test) {
  test.equal(packageName, "methods-entries");
});
