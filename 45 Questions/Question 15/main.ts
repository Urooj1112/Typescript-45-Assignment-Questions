let GuestList:string[]=["Urooj","Faaiz","Narmeen","Ahad","Mehreen"]

for(let i=0; i<GuestList.length;i++){

    console.log("You are invited to dinner. It will be an honor to have your presence.", GuestList[i] !);
    
}
let res=GuestList.splice(1,3,"Mawish")
console.log(res);

for(let i=0; i<GuestList.length;i++){

    console.log("You are invited to dinner. It will be an honor to have your presence.", res[i] !);
    
}