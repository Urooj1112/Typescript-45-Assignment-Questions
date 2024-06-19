function make_shirt(size, Message) {
    if (size === void 0) { size = "Large"; }
    if (Message === void 0) { Message = "I love Typescript!"; }
    console.log("A ".concat(size, " size shirt Have this message: ").concat(Message, " "));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love Mama");
