const janken_data = [1, 1, 2, 1, 1, 0, 1, 1, 2, 1, 0, 2, 0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 0, 0, 1, 0, 2, 1, 1, 2, 1, 1, 1, 0, 2, 1, 1, 2, 1, 0, 2, 0, 2, 1, 1, 1, 1, 0, 2, 0, 1, 0, 1, 1, 2, 0, 0]

const janken_data_str = janken_data.join("")

const counts = {
    "rock": 0, 
    "paper": 0,
    "scissors": 0
}
let serach_str = "";
document.querySelectorAll(".icon").forEach(function(element) {
    element.addEventListener("touchstart", function() {
        element.parentNode.querySelectorAll(".selected").forEach(function (selected) {
            selected.classList.remove("selected");
        })
        element.classList.add("selected")
    });
});

document.querySelector(".calculation").addEventListener("touchstart", function () {
    const selecteds = document.querySelectorAll(".selected");
    const icons = document.querySelectorAll(".icon");
    if (selecteds.length > 1) {
        const second_last = [].slice.call(icons).indexOf(selecteds[0]);
        const last = [].slice.call(icons).indexOf(selecteds[1]) - 3;
        serach_str = String(second_last) + String(last);

        for (let i = 0; i < 4; i++) {
            match_result = janken_data_str.match(new RegExp(serach_str + String(i), "g"));
            if (match_result !== null) {
                document.querySelectorAll(".count")[i].textContent = `${match_result.length}`;
            } else {
                document.querySelectorAll(".count")[i].textContent = "0"
            }
        }
    }
})
