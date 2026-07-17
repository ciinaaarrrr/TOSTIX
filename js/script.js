
function tostlariAc() {
    document.getElementById("container-menu-tostlar"
    ).style.display = "flex";
    document.getElementById("container-menus"
    ).style.display = "none";
    document.getElementById("container-drink"
    ).style.display = "none";
    document.getElementById("container-snack"
    ).style.display = "none";
    document.getElementById("container-menu-tostlar").classList.add("active");
}

function menüleriAc() {
    document.getElementById("container-menu-tostlar"
    ).style.display = "none";
    document.getElementById("container-menus"
    ).style.display = "flex";
    document.getElementById("container-drink"
    ).style.display = "none";
    document.getElementById("container-snack"
    ).style.display = "none";
     document.getElementById("container-menus").classList.add("active");
}


function icecekleriAc() {
    document.getElementById("container-menu-tostlar"
    ).style.display = "none";
    document.getElementById("container-menus"
    ).style.display = "none";
    document.getElementById("container-drink"
    ).style.display = "flex";
    document.getElementById("container-snack"
    ).style.display = "none";
    document.getElementById("container-drink").classList.add("active");
}

function ekstralariAc() {
    document.getElementById("container-menu-tostlar"
    ).style.display = "none";
    document.getElementById("container-menus"
    ).style.display = "none";
    document.getElementById("container-drink"
    ).style.display = "none";
    document.getElementById("container-snack"
    ).style.display = "flex";
    document.getElementById("container-snack").classList.add("active");
}

function menuAc() {
    document.getElementById("navbar-panel"
    ).style.right = "0"; 
    document.getElementById("navbar-panel"
    ).style.transition = "right 0.3s ease";
}

function panelKapat() {
    document.getElementById("navbar-panel"
    ).style.right = "-100%"; 
    document.getElementById("navbar-panel"
    ).style.transition = "right 0.3s ease";
}