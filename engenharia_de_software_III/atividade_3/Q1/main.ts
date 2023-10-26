import { Autor } from "./Autor";
import { Post } from "./Post";
import RepositorioDePosts from "./RepositorioDePosts";


let autor = new Autor(0, "Nicolas", "abacate");
let data = new Date();
let post = new Post(0, "Abacate", autor, data , "/Users/nicolasgabriel/Documents/ifpi/engenharia_de_software_III/atividade_3/Q1/post.txt");
let repositorio = new RepositorioDePosts();
repositorio.saveToFile(post);
console.log(autor.getNome());