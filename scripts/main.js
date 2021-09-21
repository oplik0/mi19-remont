"use strict";
const price = 8;
const height = 2.7;
function runScript() {
    const xInput = document.getElementById("x");
    const yInput = document.getElementById("y");
    const calcButton = document.getElementById("calculate");
    const result = document.getElementById("result");
    const mailButton = document.getElementById("mailto");
    calcButton.addEventListener("click", () => {
        const x = Number(xInput.value);
        const y = Number(yInput.value);
        const area = 2 * height * x + 2 * height * y;
        const cost = area * price;
        result.innerHTML = `Powierzchnia całkowita ścian: ${area} m<sup>2</sup><br>
                            Koszt malowania: ${cost}zł`;
    });
    mailButton.addEventListener("click", () => {
        window.location.href = "mailto:remont@wp.pl";
    });
}

if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
) {
    runScript();
} else {
    document.addEventListener("DOMContentLoaded", runScript);
}
