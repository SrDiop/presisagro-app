/* LOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 500);

    }, 1200);

});

/* NAVEGACION */

function mostrarSeccion(id, boton){

    let secciones = document.querySelectorAll(".section");

    secciones.forEach(seccion => {

        seccion.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

    let botones = document.querySelectorAll(".nav-btn");

    botones.forEach(btn => {

        btn.classList.remove("active-btn");

    });

    boton.classList.add("active-btn");

}

/* TOAST */

function mostrarNotificacion(){

    let toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

/* GRAFICO VENTAS */

new Chart(document.getElementById("ventasChart"), {

    type: 'line',

    data: {

        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],

        datasets: [{

            label: 'Ventas',

            data: [1200000, 1900000, 3000000, 2500000, 4200000, 4500000],

            borderWidth: 4,

            tension: 0.4,

            fill: true

        }]

    },

    options: {

        responsive: true

    }

});

/* CULTIVOS */

new Chart(document.getElementById("cultivosChart"), {

    type: 'bar',

    data: {

        labels: ['Café', 'Maíz', 'Arroz', 'Papa'],

        datasets: [{

            label: 'Producción',

            data: [1200, 900, 1500, 700],

            borderWidth: 1

        }]

    }

});

/* COSTOS */

new Chart(document.getElementById("costosChart"), {

    type: 'doughnut',

    data: {

        labels: ['Fertilizantes', 'Transporte', 'Mano de obra'],

        datasets: [{

            data: [800000, 600000, 700000],

            borderWidth: 2

        }]

    }

});

/* RENTABILIDAD */

new Chart(document.getElementById("rentabilidadChart"), {

    type: 'pie',

    data: {

        labels: ['Ganancia', 'Costos'],

        datasets: [{

            data: [2400000, 2100000],

            borderWidth: 2

        }]

    }

});

/* COSECHAS */

new Chart(document.getElementById("cosechasChart"), {

    type: 'radar',

    data: {

        labels: ['Café', 'Maíz', 'Arroz', 'Papa', 'Caña'],

        datasets: [{

            label: 'Rendimiento',

            data: [90, 75, 95, 60, 85],

            borderWidth: 2

        }]

    }

});

/* VENTAS DETALLE */

new Chart(document.getElementById("ventasDetalleChart"), {

    type: 'bar',

    data: {

        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],

        datasets: [{

            label: 'Ingresos',

            data: [1200000, 1800000, 2400000, 3500000, 4500000],

            borderWidth: 1

        }]

    }

});

/* PRODUCCION ANUAL */

new Chart(document.getElementById("anualChart"), {

    type: 'line',

    data: {

        labels: ['2022', '2023', '2024', '2025', '2026'],

        datasets: [{

            label: 'Producción',

            data: [20, 35, 40, 55, 70],

            borderWidth: 3,

            tension: 0.4,

            fill: true

        }]

    }

});

/* LOGIN */

function ingresarSistema(){

    document.getElementById("login-screen").style.opacity = "0";

    setTimeout(() => {

        document.getElementById("login-screen").style.display = "none";

        document.getElementById("app-container").style.display = "block";

    }, 500);

}

/* CERRAR SESION */

function cerrarSesion(){

    document.getElementById("app-container").style.display = "none";

    document.getElementById("login-screen").style.display = "flex";

    setTimeout(() => {

        document.getElementById("login-screen").style.opacity = "1";

    }, 100);

}