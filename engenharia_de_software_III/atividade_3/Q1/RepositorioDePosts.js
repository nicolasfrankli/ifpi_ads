"use strict";
exports.__esModule = true;
var fs = require("fs");
var RepositorioDePosts = /** @class */ (function () {
    function RepositorioDePosts() {
    }
    RepositorioDePosts.prototype.saveToFile = function (post) {
        try {
            var writer = fs.createWriteStream(post.getFilePath());
            writer.write("ID: ".concat(post.getId(), "\n"));
            writer.write("Texto: ".concat(post.getTexto(), "\n"));
            writer.write("Autor: ".concat(post.getAutor().getNome(), "\n"));
            writer.write("Data: ".concat(post.getData(), "\n"));
            writer.write("Quantidade de Likes: ".concat(post.getQuantidadeDeLikes(), "\n"));
            writer.close();
        }
        catch (error) {
            console.error(error);
        }
    };
    return RepositorioDePosts;
}());
exports["default"] = RepositorioDePosts;
