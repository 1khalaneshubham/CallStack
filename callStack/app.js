function hello(){
    console.log("Calling Hello functio");
    console.log("Hello World");
}

function demo(){
    console.log("Calling Demo with hello functio");
    hello();
}

console.log("Calling Demo functio");
demo();
console.log("Hello and Bay !");
// hello();