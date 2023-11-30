function yell(msg) {
    console.log(typeof msg);
    if (typeof msg == "string") {
        console.log("bu bir string");
    } else {
        console.log("Bu bir string değil");
    }

    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}