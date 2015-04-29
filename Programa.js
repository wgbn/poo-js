#include "Arquivo.js"

// classe Programa

// construtor da classe
Programa = function(_arquivo) {
    this.arquivo = _arquivo;
}

// constantes
Programa.JAVA   = 0;
Programa.C      = 1;
Programa.O      = 2;
Programa.EXE    = 3;
Programa.CLASS  = 4;

// compilado
Programa.prototype.compilado = function() {
    // a ser implementado nas classes filhas
}

// toString
Programa.prototype.toString = function() {
    return "Programa: " + this.arquivo.toString() + "\n  Compilado: " + this.compilado.toString();
}


// método estático getTipo
Programa.getTipo = function(tipo) {
    switch (tipo) {
    case this.JAVA:
        return "java";
    case this.C:
        return "c";
    case this.O:
        return "o";
    case this.EXE:
        return "exe";
    case this.CLASS:
        return "class";
    default:
        return "TIPO INDEFINIDO";
    }
}