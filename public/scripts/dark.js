const html = document.querySelector("html")


let isDark = false
window.addEventListener('DOMContentLoaded', () => {
    Dark()
});

function Dark() {   
    let dark = localStorage.getItem("isDark")
    let checkBox = document.getElementById("switch")

    if (dark == "true") {
        checkBox.checked ? checkBox.setAttribute("checked", true) : checkBox.setAttribute("checked", false)
        darkMode()
    }

}

function darkMode() {
    html.classList.toggle('dark');
    isDark = !isDark
    isDark ? document.getElementById("logo").src = "/images/LogoDark.svg" : document.getElementById("logo").src = "/images/Logo.svg"
    localStorage.setItem("isDark", isDark)
}

// Dark()