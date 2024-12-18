function pswdvldtr(str) {
    let pass = 0;
    
    // Check password length
    if (str.length >= 8) {
        let hasDigit = false;
        let hasUpper = false;
        let hasLower = false;

        // Iterate through each character in the string
        for (let index = 0; index < str.length; index++) {
            const element = str[index];
            const code = element.charCodeAt(0);
            
            // Check for digit (0-9)
            if (48 <= code && code <= 57) {
                hasDigit = true;
            }
            // Check for uppercase letter (A-Z)
            else if (65 <= code && code <= 90) {
                hasUpper = true;
            }
            // Check for lowercase letter (a-z)
            else if (97 <= code && code <= 122) {
                hasLower = true;
            }
        }
        
        // If all conditions are met, set pass to 1
        if (hasDigit && hasUpper && hasLower) {
            pass = 1;
        }
    }

    return pass === 1; // Return true if all conditions are met
}

(function main() {
    const paswd = "Password123#";
    console.log(pswdvldtr(paswd));
})();
