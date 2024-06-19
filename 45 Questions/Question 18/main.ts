console.log("Places to visit array");
let placesToVisit: string[] = ["Pakistan", "India", "Iraq", "China", "USA"];

console.log("Original order");
console.log("Original Order:", placesToVisit);
console.log("*************************************");


console.log("Alphabetical order without modifying the actual list");
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("*************************************");

console.log("The array is still in its original order");
console.log("Original Order (still):", placesToVisit);
console.log("*************************************");

console.log("Reverse alphabetical order without changing the original list");
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
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
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
console.log("*************************************");