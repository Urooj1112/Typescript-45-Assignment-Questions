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
    console.log("*******************");
});
console.log("\nWe are sorry to inform you that the table we have booked doesn't make on time so we are inviting only 2 people for a dinner");
