let cl;
let ster = "★";

loop(10)
loop(9)
loop(8)
loop(7)
loop(6)
loop(5)
loop(4)
loop(3)
loop(2)
loop(1)

function loop(x){
    for (cl=1; cl<x; cl++){
        ster = ster + "★"
    }
    document.write("<div>"+ster+"</div>");
    ster = "★"
}