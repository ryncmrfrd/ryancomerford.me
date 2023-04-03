/*
 * Darkmode toggle
*/

const body = document.documentElement,
    chkbox = document.getElementById("switch");

//handle switch changes
chkbox.addEventListener("change", e => {
    e.target.checked ? 
        body.setAttribute('data-theme','dark') :
        body.setAttribute('data-theme','light');
});

//set switch based on data-theme
body.getAttribute("data-theme") == "dark" ? chkbox.click() : "";
