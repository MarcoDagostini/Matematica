var m1 = new Array();
var m2 = new Array();

//Define o n° de linhas e colunas da matriz 1

var nlinhas = parseInt(prompt("Digite o numero de linhas da 1° matriz"));
var ncolunas = parseInt(prompt("Digite o numero de colunas da 1° matriz"));

function criacaoMatriz1() {
    //começa criar matriz 1
    for (var i = 0; i < nlinhas; i++) {
        m1[i] = new Array();
        for (var j = 0; j < ncolunas; j++) {
            m1[i][j] = (Math.floor(Math.random() * 100));
        }
    }
    
    return m1;

}
//Define o n° de linhas e colunas da matriz 2
var nlinhas2 = parseInt(prompt("Digite o numero de linhas da 2° matriz"));
var ncolunas2 = parseInt(prompt("Digite o numero de colunas da 2° matriz"));

function criacaoMatriz2() {
    //começa criar matriz 2
    for (var l = 0; l < nlinhas2; l++) {
        m2[l] = new Array();
        for (var c = 0; c < ncolunas2; c++) {
            m2[l][c] = (Math.floor(Math.random() * 100));
        }
    }
    
    return m2;
}

var matriz1 = criacaoMatriz1();
var matriz2 = criacaoMatriz2();

function impressao() {
    document.write("<div id='matrizes'><table><pre class='geral'> Matriz1                                             Matriz2</pre>");
    for (var i = 0; i < matriz1.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < matriz1[i].length; j++) {
            document.write("<td>" + matriz1[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

    document.write("<table>");
    for (var i = 0; i < matriz2.length; i++) {
        document.write("<tr>");
        for (var j = 0; j < matriz2[i].length; j++) {
            document.write("<td>" + matriz2[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table></div><hr>");
}

impressao();
function somaMatriz() {
    if (matriz1.length != matriz2.length && matriz2.length != matriz1.length) {
        alert("As matrizes não podem ser somadas");

    } else {
        var matrizSoma = new Array();
        for (var i = 0; i < nlinhas; i++) {
            matrizSoma[i] = new Array();
            for (var j = 0; j < ncolunas2; j++) {
                matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
            }

        }
        
        document.write("<h1 class='geral'>Matrizes somadas</h1><br><div id='matrizes'>");
        document.write("<br><table>");

        for (var i = 0; i < nlinhas; i++) {
            document.write("<tr>");
            for (var j = 0; j < ncolunas2; j++) {
                document.write("<td>" + matrizSoma[i][j] + "</td>");


            }
            document.write("</tr>");
        }
        document.write("</table></div><hr>")
    }
}

function subtracaoMatriz() {
    if (matriz1.length != matriz2.length && matriz2.length != matriz1.length) {
        alert("As matrizes não podem ser Subtraidas");

    } else {
        var matrizSub = new Array();
        for (var i = 0; i < nlinhas; i++) {
            matrizSub[i] = new Array();
            for (var j = 0; j < ncolunas2; j++) {
                matrizSub[i][j] = matriz1[i][j] - matriz2[i][j];
            }

        }
        
        document.write("<h1 class='geral'>Matrizes Subtraidas</h1><br><div id='matrizes'>");
        document.write("<br><table>");

        for (var i = 0; i < nlinhas; i++) {
            document.write("<tr>");
            for (var j = 0; j < ncolunas2; j++) {
                document.write("<td>" + matrizSub[i][j] + "</td>");


            }
            document.write("</tr>");
        }
        document.write("</table></div><hr>")
    }
}

function multMatriz() {

    //multiplicação matriz
    var matrizMult = new Array();
        for (var i = 0; i < matriz1.length; i++) {
            matrizMult[i] = new Array();
            for (var j = 0; j < matriz2[0].length; j++) {
                matrizMult[i][j] = 0;
                for (var k = 0; k < matriz1[0].length; k++) {
                    matrizMult[i][j] += matriz1[i][k] * matriz2[k][j];
                }
            }
        }
        
        document.write("<h1 class='geral'>Matriz multiplicada</h1><br><div id='matrizes'><table>");
        for (var i = 0; i < matrizMult.length; i++) {
            document.write("<tr>");
            for (var j = 0; j < matrizMult[i].length; j++) {
                document.write("<td>" + matrizMult[i][j] + "</td>");
            }
            document.write("</tr>");
        }
        document.write("</table></div><hr>");
}
//ifs
if (ncolunas == ncolunas2 && nlinhas == nlinhas2) {
    somaMatriz();
    subtracaoMatriz();

} else {
    alert("As matrizes não podem ser somadas nem subtraidas");
    
}

if (ncolunas == nlinhas2) {
    multMatriz();
} else {
    alert("A operação de multipkicação não pode ser feita")
}
