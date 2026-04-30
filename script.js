function log(message) {
    const output = document.getElementById("output");
    output.innerHTML += message + "<br>";
}

function runDemo() {
    document.getElementById("output").innerHTML = "";

    log("1. Start (Synchronous)");

    // Macrotask (setTimeout)
    setTimeout(() => {
        log("4. Macrotask (setTimeout)");
    }, 0);

    // Microtask (Promise)
    Promise.resolve().then(() => {
        log("3. Microtask (Promise)");
    });

    log("2. End (Synchronous)");
}
