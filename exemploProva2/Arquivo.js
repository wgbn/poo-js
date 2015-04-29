/**
 * class Arquivo
 */

Arquivo = function() {
    this._init();
}


/**
 * _init define todos os atributos de Arquivo para o seu valor padrão.
 * Certifique-se de chamar esse método dentro de seu construtor de classe
 */
Arquivo.prototype._init = function() {
    this.nome = "";
    this.texto = "";
    this.extensao = "";

    // chama o metodo initialize (main)
    this.initialize();
}

/**
 * Construtor da classe
 */
Arquivo.prototype.Arquivo = function(_nome, _texto, _extensao) {
    this.nome = _nome;
    this.texto = _texto;
    this.extensao = _extensao;
}


/**
 * Os métodos Getters
 */
Arquivo.prototype.getNome = function() {
    return this.nome;
}

Arquivo.prototype.getTexto = function() {
    return this.texto;
}

Arquivo.prototype.getExtensao = function() {
    return this.extensao;
}


/**
 * O método toString
 */
Arquivo.prototype.toString = function() {
    return "Nome: " + this.nome + "." + this.extensao + " Texto: " + this.texto;
}

/**
 * Uma alternativa ao método main
 */
Arquivo.prototype.initialize = function() {
    var arquivoJava = new Arquivo("Carro", "public class Carro{ }", Programa.getTipo(Programa.JAVA));
    var programaJava = new ProgramaJava(arquivoJava);

    var aqruivoC = new Arquivo("Soma", "#include stdio.h int x, y ", Programa.getTipo(Programa.C));
    var programaC = new ProgramaC(aqruivoC);

    document.write(programaJava);
    document.write(programaC);
}
