var TCHI0007 = {
    init: function () {
        let box = document.createElement("div");
        box.className = "box";
        box.textContent = "tchi0007";
        let boxes = document.getElementById("boxes");
        boxes.appendChild(box);

        box.addEventListener("click", function () {
            this.style.borderColor = "pink";
            this.style.backgroundColor = "yellow";
        });
        box.addEventListener("mouseover", function () {
            this.target.classList.toggle("highlight");
        });
        box.addEventListener("mouseout", function () {
            this.target.classList.toggle("highlight");
            this.target.removeAttribute("style");
        });
    }
}
