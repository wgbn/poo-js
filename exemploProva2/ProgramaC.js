#include "Programa.js"
#include "Arquivo.js"

// classe programaC

// construtor da classe
ProgramaC = function(_arquivo) {
    this._init(_arquivo);
}

// herda da classe Programa
ProgramaC.prototype = new Programa();

// construtor
ProgramaC.prototype._init = function(_arquivo) {
    this.arquivo = _arquivo;
}

// compilado
ProgramaC.prototype.compilado = function() {
    var _obj = this.compiladoObjeto();
    return new Arquivo(_obj.getNome(), _obj.getTexto() + " código executável", Programa.getTipo(Programa.EXE));
}

// compiladoObjeto
ProgramaC.prototype.compiladoObjeto = function() {
    return new Arquivo(this.arquivo.getNome(), this.arquivo.getTexto() + " código objeto", Programa.getTipo(Programa.O));
}

// to string
ProgramaC.prototype.toString = function() {
    return this.toString() + "\n  Objeto: " + this.compiladoObjeto().toString();
}
