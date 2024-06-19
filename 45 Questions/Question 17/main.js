var guestList = ["Urooj", "Faaiz", "Narmeen", "Ahad"];
var host = "Urooj";
console.log("\n################");
console.log("Updated Guest List");
console.log("\n################");
var addGuest1 = "Mehreen";
var addGuest2 = "Hasan";
var addGuest3 = "Jazi";
guestList.splice(0, 0, addGuest1); // Insert at the beginning
guestList.splice(3, 0, addGuest2); // Insert at index 3
guestList.push(addGuest3); // Append at the end
guestList.forEach(function (updatedGuest) {
    console.log("Dear ".concat(updatedGuest, ", \nI would like to invite you for a dinner. \nYours sincerely, \n").concat(host));
    console.log("************************");
});
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    if (removeGuest) {
        console.log("Sorry ".concat(removeGuest, ", the dinner table won't arrive in time, and I can only invite two guests."));
    }
}
console.log("Invitations to the two remaining guests");
console.log("\n*** Remaining Invitations ***");
guestList.forEach(function (remainingGuest) {
    console.log("Dear ".concat(remainingGuest, ",\nYou're still invited to dinner. Looking forward to seeing you!\n\nSincerely, ").concat(host));
    console.log("***************************");
});
console.log("Empty the list");
guestList = []; // Clear the list
// Print to make sure the list is empty
console.log("\n*** Empty Guest List ***");
console.log(guestList);
