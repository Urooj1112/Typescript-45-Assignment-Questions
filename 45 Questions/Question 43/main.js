var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians
function show_magicians2(magicians) {
    console.log("Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great
function make_great(magicians) {
    var greatMagicians1 = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians1.push("the Great ".concat(magician));
    }
    return greatMagicians1;
}
// Array of magician's names
var magicianNames2 = ["KUDA BUX", "BOSCO", "VON ARX ", "TAMPA"];
// Create a copy of the array
var originalMagicians = __spreadArray([], magicianNames2, true);
// Call make_great with the copy
var greatMagicians1 = make_great(originalMagicians);
// Call show_magicians to display the original array
show_magicians2(magicianNames2);
// Call show_magicians to display the modified array
show_magicians2(greatMagicians1);
