// border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%;

let values = ["50%", "50%", "50%", "50%", "50%", "50%", "50%", "50%"];

const box = document.querySelector("#box");
const clipboardElement = document.getElementById("clipboard");

function handleChange(e) {
    let valueOne = e.target.value;
    let valueTwo = 100 - e.target.value;
    let [firstValue, secondValue] = e.target.name.split("");
    values[firstValue] = valueOne + "%";
    values[secondValue] = valueTwo + "%";
    bRadius = `${values.slice(0, 4).join(" ")} / ${values.slice(4).join(" ")}`;
    clipboardElement.value = `border-radius: ${bRadius};`;
    box.style.borderRadius = bRadius;
}

const inputs = document.querySelectorAll("input");
inputs.forEach((v) => {
    v.addEventListener("input", handleChange);
});

document.querySelector("#box").addEventListener("click", (e) => {
    document.querySelector(".alert").classList.add("animate");
    document.querySelector("#clipboard").select();
    document.execCommand("copy");
});

document.querySelector(".alert").addEventListener("animationend", (e) => {
    e.target.classList.remove("animate");
})