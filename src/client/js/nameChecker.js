function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    const names = [
        ".com",
        ".net",
        ".gov",
        ".ca",
        "www",
        ".org",
        "http",
        "https",
        ".co.uk",
        ".de",
        // "."
    ]
    
    for (const name of names) {
        if(inputText.includes(name)) {
            return true;
        }
    }

    return false;
}

export { checkForName }
