let cl;
let a;
let ster = "△";
let sp = "　";

loop(10,1)
loop(9,2)
loop(8,3)
loop(7,4)
loop(6,5)
loop(5,6)
loop(4,7)
loop(3,8)
loop(2,9)
loop(1,10)

function loop(x,y){
    for (cl=1; cl<x; cl++){
        sp = sp + "　"
        }
    for (a=1; a<y; a++){
        ster = ster + "△△"
    }
    document.write("<div>"+sp+ster+"</div>");
    ster = "△"
    sp = "　"
}

