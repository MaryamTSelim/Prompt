window.addEventListener("load", () => {
    let alert = document.getElementById("alert");
    let prompt = document.getElementById("prompt");
    let msg = ""
    alert.addEventListener("click", () => {
        msg = msg === "" ? "default" : msg;
        document.querySelector(".overlay.alert-container .alert div:first-child").textContent = msg;

        document.querySelector(".overlay.alert-container").style.maxHeight = "1000px";
        document.querySelector(".overlay.alert-container .alert").style.maxHeight = "1000px";
        document.querySelector(".overlay.alert-container .alert div button").addEventListener("click", () => {
            document.querySelector(".overlay.alert-container").style.maxHeight = "0px";
            document.querySelector(".overlay.alert-container .alert").style.maxHeight = "0px";
        })
    })

    prompt.addEventListener("click", () => {
        document.querySelector(".overlay.prompt-container").style.maxHeight = "1000px";
        document.querySelector(".overlay.prompt-container .prompt").style.maxHeight = "1000px";
        document.querySelectorAll(".overlay.prompt-container .prompt div button")[0].addEventListener("click", () => {
            msg = document.querySelector(".overlay.prompt-container div input").value

            document.querySelector(".overlay.prompt-container").style.maxHeight = "0px";
            document.querySelector(".overlay.prompt-container .prompt").style.maxHeight = "0px";

            alert.click();
        })
        document.querySelectorAll(".overlay.prompt-container .prompt div button")[1].addEventListener("click", () => {
            msg = ""
            document.querySelector(".overlay.prompt-container").style.maxHeight = "0px";
            document.querySelector(".overlay.prompt-container .prompt").style.maxHeight = "0px";
        })


    })
})