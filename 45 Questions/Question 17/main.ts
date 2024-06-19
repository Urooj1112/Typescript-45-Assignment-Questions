let guestList: string[] = ["Urooj", "Faaiz", "Narmeen", "Ahad"];
const host: string = "Urooj";

console.log("\n################");
console.log("Updated Guest List");
console.log("\n################");

const addGuest1: string = "Mehreen";
const addGuest2: string = "Hasan";
const addGuest3: string = "Jazi";

guestList.splice(0, 0, addGuest1);  // Insert at the beginning
guestList.splice(3, 0, addGuest2);  // Insert at index 3
guestList.push(addGuest3);          // Append at the end

guestList.forEach(updatedGuest => {
    console.log(`Dear ${updatedGuest}, \nI would like to invite you for a dinner. \nYours sincerely, \n${host}`);
    console.log("************************");
    
});

while (guestList.length > 2) {
    const removeGuest = guestList.pop();
    if (removeGuest) {
        console.log(`Sorry ${removeGuest}, the dinner table won't arrive in time, and I can only invite two guests.`);
    }
}

console.log("Invitations to the two remaining guests");

console.log("\n*** Remaining Invitations ***");
guestList.forEach(remainingGuest => {
    console.log(`Dear ${remainingGuest},\nYou're still invited to dinner. Looking forward to seeing you!\n\nSincerely, ${host}`);
    console.log("***************************");
    
});

console.log("Empty the list");
guestList = [];  // Clear the list

// Print to make sure the list is empty
console.log("\n*** Empty Guest List ***");
console.log(guestList);
