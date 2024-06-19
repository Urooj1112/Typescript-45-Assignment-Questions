var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Places to visit array");
var placesToVisit = ["Pakistan", "India", "Iraq", "China", "USA"];
console.log("Original order");
console.log("Original Order:", placesToVisit);
console.log("*************************************");
console.log("Alphabetical order without modifying the actual list");
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
console.log("*************************************");
console.log("The array is still in its original order");
console.log("Original Order (still):", placesToVisit);
console.log("*************************************");
console.log("Reverse alphabetical order without changing the original list");
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("*************************************");
console.log("The array is still in its original order");
console.log("Original Order (still):", placesToVisit);
console.log("*************************************");
console.log("Reverse the order of the list");
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
console.log("*************************************");
console.log("Reverse the order again to get back to the original order");
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
console.log("*************************************");
console.log("Sort the array in alphabetical order");
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
console.log("*************************************");
console.log("Sort the array in reverse alphabetical order");
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
console.log("*************************************");
