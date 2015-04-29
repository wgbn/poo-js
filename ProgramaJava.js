#include "Programa.js"
#include "Arquivo.js"

// classe ProgramaJava

// construtor da classe
ProgramaJava = function(_arquivo) {
    this._init(_arquivo);
}

// herda da classe Programa
ProgramaJava.prototype = new Programa();

// construtor
ProgramaJava.prototype._init = function(_arquivo) {
    this.arquivo = _arquivo;
}

// compilado
ProgramaJava.prototype.compilado = function() {
    return new Arquivo(this.arquivo.getNome(), this.arquivo.getTexto() + " código class", Programa.getTipo(Programa.CLASS));
}