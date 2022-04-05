let EvenUsersID = [];
let OddUsersID = [];

for (let i = 1; i <= 200; i++){
    if (i % 2 === 0){
        EvenUsersID.push(i);
    }
    else{
        OddUsersID.push(i);
    }
}

console.log("Total Number of Even Users = " + EvenUsersID.length);
console.log("Total Number of OOddUsers = " + OddUsersID.length);