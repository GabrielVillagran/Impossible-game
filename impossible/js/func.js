// Variables globales que se utilizaran
var tablero, size = 4,
    nums = 15,
    seg = 0,
    clicCount = 0,
    tot = 0;
temp = ""
act = "";
var name, timer;
//creacion del tablero
function start() {
    // solicitar nombre e iniciar tiempo
    name = prompt("Introduce tu nombre:");
    // iniciar arreglo
    tablero = new Array(size);
    for (var i = 0; i < size; i++) {
        tablero[i] = new Array(size);
        for (var j = 0; j < size; j++) {
            //valores asignados a cada posicion del arreglo
            tablero[i][j] = "";
        }
    }
    //logica del juego y llenado de casillas
    addNums();
    printTablero();
    //win();

    //Muestra nombre y tiempo transcurrido
    document.getElementsByClassName("name")[0].innerHTML = name;
    timer = window.setInterval(
        function() {
            seg++;
            document.getElementsByClassName("time")[0].innerHTML = seg;
        }, 1000)
}

//Agrega Numeros all tablero
function addNums() {
    // numeros a asignar
    num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    var a = 0,
        b = 0;
    for (var i = 0; i < 15; i++) {
        // Toma posiciones aleatorias del grid para poder asignar valores
        a = Math.floor(Math.random() * size);
        b = Math.floor(Math.random() * size);
        //verificacion de casilla vacia
        if (tablero[a][b] != "") {
            i--;
        } else {
            //asignacion de numeros al grid
            tablero[a][b] = num[i];
            //Muestra numeros en pantalla
            document.getElementById("0" + "0").innerHTML = tablero[0][0];
            document.getElementById("0" + "1").innerHTML = tablero[0][1];
            document.getElementById("0" + "2").innerHTML = tablero[0][2];
            document.getElementById("0" + "3").innerHTML = tablero[0][3];
            // 
            document.getElementById("1" + "0").innerHTML = tablero[1][0];
            document.getElementById("1" + "1").innerHTML = tablero[1][1];
            document.getElementById("1" + "2").innerHTML = tablero[1][2];
            document.getElementById("1" + "3").innerHTML = tablero[1][3];
            // 
            document.getElementById("2" + "0").innerHTML = tablero[2][0];
            document.getElementById("2" + "1").innerHTML = tablero[2][1];
            document.getElementById("2" + "2").innerHTML = tablero[2][2];
            document.getElementById("2" + "3").innerHTML = tablero[2][3];
            // 
            document.getElementById("3" + "0").innerHTML = tablero[3][0];
            document.getElementById("3" + "1").innerHTML = tablero[3][1];
            document.getElementById("3" + "2").innerHTML = tablero[3][2];
            document.getElementById("3" + "3").innerHTML = tablero[3][3];
            // 
        }
    }

}
//Imprime tablero
function printTablero() {
    for (var i = 0; i < size; i++) {
        console.log(tablero[i]);
    }
    console.log("============================")
}

//cambio de numeros
function cambio(i, j) {
    //se encuentra mina
    if (tablero[i][j] != 0 && tablero[i][j] != "") {
        // verificar valor hacia arriba (bien)
        if (parseInt(i) - 1 >= 0) {
            if (tablero[parseInt(i) - 1][parseInt(j)] == "") {
                // almacena valor 
                temp = tablero[i - 1][j];
                act = tablero[i][j];
                // cambio de valores
                tablero[i - 1][j] = act;
                tablero[i][j] = temp;
                // cambia valor
                document.getElementById(i + j).innerHTML = temp;
                document.getElementById(parseInt(i) - 1 + j).innerHTML = act;
                clicCount++;
                document.getElementsByClassName("moves")[0].innerHTML = clicCount;
                printTablero();
            }
        }
        // Verificar valor hacia  izquierda (error en espacios)
        if ((parseInt(j) - 1) >= 0) {
            if (tablero[i][(parseInt(j) - 1)] == "") {
                // almacena valor 
                temp = tablero[i][(parseInt(j) - 1)];
                act = tablero[i][j];
                // cambio de valores
                tablero[i][(parseInt(j) - 1)] = act;
                tablero[i][j] = temp;
                // cambia valor
                document.getElementById(i + j).innerHTML = temp;
                document.getElementById(i + (parseInt(j) - 1)).innerHTML = act;
                clicCount++;
                document.getElementsByClassName("moves")[0].innerHTML = clicCount;
                //printTablero();
            }
        }
        // Verificar valor hacia derecha (error en espacios)
        if ((parseInt(j) + 1) < size) {
            if (tablero[i][(parseInt(j) + 1)] == "") {
                // almacena valor 
                temp = tablero[i][(parseInt(j) + 1)];
                act = tablero[i][j];
                // cambio de valores
                tablero[i][(parseInt(j) + 1)] = act;
                tablero[i][j] = temp;
                // cambia valor
                document.getElementById(i + j).innerHTML = temp;
                document.getElementById(i + (parseInt(j) + 1)).innerHTML = act;
                clicCount++;
                document.getElementsByClassName("moves")[0].innerHTML = clicCount;
                //printTablero();
            }
        }
        // Verificar valor hacia abajo (bien)
        if ((parseInt(i) + 1) < size) {
            if (tablero[parseInt(i) + 1][parseInt(j)] == "") {
                // almacena valor 
                temp = tablero[parseInt(i) + 1][j];
                act = tablero[i][j];
                // cambio de valores
                tablero[parseInt(i) + 1][j] = act;
                tablero[i][j] = temp;
                // cambia valor
                document.getElementById(i + j).innerHTML = temp;
                document.getElementById(parseInt(i) + 1 + j).innerHTML = act;
                clicCount++;
                document.getElementsByClassName("moves")[0].innerHTML = clicCount;
                printTablero();
            }
        }
    }
    win();
}

function win() {
    // var tot = 0;
    // values = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
    // oldValues = new Array();
    // // asignacion de valores de la mtariz a un vector 
    // for (var i = 0; i < size; i++) {
    //     for (var j = 0; j < size; j++) {
    //         tablero[i][j] = oldValues[j];
    //     }
    // }
    // // verificacion de igualdad de valores 
    // for (var i = 0; i < size; i++) {
    //     if (values[i] == oldValues[i]) {
    //         tot++;
    //     }
    // }
    // if (tot == 14) {
    //     alert(name + " " + "con tan solo:" + " " + clicCount + " " + "movimientos y en tan solo" + " " + seg + " segundos has ganado, Felicidades!!!");
    //     return true;
    // }
    if ((document.getElementById("0" + "0").innerHTML == 1) &&
        (document.getElementById("0" + "1").innerHTML == 2) &&
        (document.getElementById("0" + "2").innerHTML == 3) &&
        (document.getElementById("0" + "3").innerHTML == 4) &&
        // 
        (document.getElementById("1" + "0").innerHTML == 5) &&
        (document.getElementById("1" + "1").innerHTML == 6) &&
        (document.getElementById("1" + "2").innerHTML == 7) &&
        (document.getElementById("1" + "3").innerHTML == 8) &&
        // 
        (document.getElementById("2" + "0").innerHTML == 9) &&
        (document.getElementById("2" + "1").innerHTML == 10) &&
        (document.getElementById("2" + "2").innerHTML == 11) &&
        (document.getElementById("2" + "3").innerHTML == 12) &&
        // 
        (document.getElementById("3" + "0").innerHTML == 13) &&
        (document.getElementById("3" + "1").innerHTML == 14) &&
        (document.getElementById("3" + "2").innerHTML == 15)) {
        alert(name + " " + "con tan solo:" + " " + clicCount + " " + "movimientos y en tan solo" + " " + seg + " segundos has ganado, Felicidades!!!");
        return true;
    }
}