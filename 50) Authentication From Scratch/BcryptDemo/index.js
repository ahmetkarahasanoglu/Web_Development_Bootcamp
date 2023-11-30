const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    //Pass in the plain text password and the number of rounds:
    const hash = await bcrypt.hash(pw, 12);  // 12 is the number of rounds (which is the speed of the function) [we want the function to take some time when executed, because hackers may use brute force attack]
    console.log(hash);                       // '--> [note: this 'hash(pw, 12)' function automatically creates and uses a 'salt']
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}

hashPassword('monkey');
login('monkey', '$2b$12$YS9GdWUznoM7r1522knuY.1dq1taWra5zgG7N1WzHs4j.fridopWS')
