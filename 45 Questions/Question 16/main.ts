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
    console.log("*******************");
});


console.log("\nWe are sorry to inform you that the table we have booked doesn't make on time so we are inviting only 2 people for a dinner");
