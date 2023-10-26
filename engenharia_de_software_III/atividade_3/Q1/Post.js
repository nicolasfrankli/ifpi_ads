"use strict";
exports.__esModule = true;
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(id, texto, autor, data, filePath) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.data = new Date(data.getTime());
        this.quantidadeDeLikes = 0;
        this.filePath = filePath;
    }
    Post.prototype.getId = function () {
        return this.id;
    };
    Post.prototype.getTexto = function () {
        return this.texto;
    };
    Post.prototype.getAutor = function () {
        return this.autor;
    };
    Post.prototype.getData = function () {
        return new Date(this.data.getTime());
    };
    Post.prototype.getQuantidadeDeLikes = function () {
        return this.quantidadeDeLikes;
    };
    Post.prototype.getFilePath = function () {
        return this.filePath;
    };
    return Post;
}());
exports.Post = Post;
