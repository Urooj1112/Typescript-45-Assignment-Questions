var GuestList = ["Urooj", "Faaiz", "Narmeen", "Ahad", "Mehreen"];
for (var i = 0; i < GuestList.length; i++) {
    console.log("You are invited to dinner. It will be an honor to have your presence.", GuestList[i]);
}
var res = GuestList.splice(1, 4, "Mawish");
console.log(res);
for (var i = 0; i < GuestList.length; i++) {
    console.log("You are invited to dinner. It will be an honor to have your presence.", res[i]);
}
