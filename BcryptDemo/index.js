const bcrypt = require('bcrypt');

//salting separately
// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12); //recommended minimum
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

//salting in one go
const hashPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12); //recommended minimum
    const hash = await bcrypt.hash(pw, 12);
    // console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log('INCORRECT!')
    }
}

// hashPassword('monkey');
login('monkey', '$2b$12$R/mcsyYW4F3BpbqnaelIUe6HXw/UTtSKm9Ua/uB82NKIe8xGCObBO')
