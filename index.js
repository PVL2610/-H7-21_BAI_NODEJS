function analyzePassword(password) {
    const specialChars = "-#!$@£%^&*()_+|~=`{}[]:\";'<>?,./";
    let totalChars = password.length;
    let digits = 0;
    let special = 0;
    let uppercase = 0;
    let lowercase = 0;
  
    for (let char of password) {
      if (!isNaN(char) && char !== ' ') {
        digits++;
      } else if (specialChars.includes(char)) {
        special++;
      } else if (char >= 'A' && char <= 'Z') {
        uppercase++;
      } else if (char >= 'a' && char <= 'z') {
        lowercase++;
      }
    }
  
    return {
      totalChars: totalChars,
      digits: digits,
      special: special,
      uppercase: uppercase,
      lowercase: lowercase
    };
};
  
//   const result = analyzePassword("HelloWorld123!$");
//   console.log(result);
  

function isValidPassword(password, passwordPolicy) {
    let message = [];
    const countChars = analyzePassword(password);
    if (countChars.totalChars < passwordPolicy.minLenght ) {
        message.push(`${message.length ? "" : "Password"} should be at least ${passwordPolicy.minLenght} charactors`);
    }
    if (countChars.totalChars > passwordPolicy.maxLenght ) {
        message.push(`${message.length ? "" : "Password"} must be at most ${passwordPolicy.maxLenght} characters`);
    }
    if (countChars.special < passwordPolicy.specialCharactor ) {
        message.push(`${message.length ? "" : "Password"} should be at least ${passwordPolicy.specialCharactor} special charactors`);
    }
    if (countChars.digits < passwordPolicy.numbericCharactor ) {
        message.push(`${message.length ? "" : "Password"} should be at least ${passwordPolicy.numbericCharactor} numeric charactors`);
    }
    if (countChars.lowercase < passwordPolicy.lowercaseCharactor ) {
        message.push(`${message.length ? "" : "Password"} should be at least ${passwordPolicy.lowercaseCharactor} lowercase charactors`);
    }
    if (countChars.uppercase < passwordPolicy.uppercaseCharactor ) {
        message.push(`${message.length ? "" : "Password"} should be at least ${passwordPolicy.uppercaseCharactor} uppercase charactors`);
    }
    return message.length ? { isValidPassword: false, message: message.join(",") } : { isValidPassword: true };
}
passwordPolicy = {
    minLenght:8,
    maxLength:64,
    specialCharactor:1,
    numbericCharactor:4
};
console.log(isValidPassword("HelloWorld123!$", passwordPolicy));