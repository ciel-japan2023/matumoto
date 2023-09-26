document.body.innerHTML = 'Hello World';
alert("Hello World");
console.log("a");
console.log(1);
console.log("１");
let a = "ABCD";
console.log(a);
let b = "1231";
console.log(b);
let c = "ABC";
let d = "DEF";
console.log(c + d);
let e = 200;
let f = 400;
console.log(e + f);
let g = "200";
let h = "400";
console.log(g + h);
let i = "200";
let j = "400";
let k = j - i;
console.log(k);
let aa = "10";
let ab = "400";
let ac = aa * ab;
console.log(ac);
let ad = "10";
let ae = "400";
let af = ae / ad;
console.log(af);
let array = ["ABC","DEF","GHI"];
console.log(array);
console.log("配列一番目の値は："+array[0]);
console.log("配列二番目の値は："+array[1]);
console.log("配列三番目の値は："+array[2]);
let ag = 100;
let ah = 50;
if(ag > ah){
   console.log("agはahより大きいです。");
}
else {
    console.log("agはahより小さいどぇす。");
}
let ai = 100;
let aj = 500;
if(ai > aj){
   console.log("aiはajより大きいです。");
}
else {
    console.log("aiはajより小さいどぇす。");
}
let ak = 100;
let al = 50;
if(ak >= al){
   console.log("akはalより大きいです、もしくは同じ値です");
}
else {
    console.log("akはalより小さいどぇす。");
}
let ba = 100;
let bb = 100;
if(ba >= bb){
   console.log("baはbbより大きいです、もしくは同じ値です");
}
else {
    console.log("baはbbより小さいどぇす。");
}
let bc = 100;
let bd = 100;
if(bc == bd){
   console.log("bcとbdは同じ値です");
}
else {
    console.log("bcとbdは異なる値です");
}
let be = 100;
let bf = 50;
if(bc == bd){
   console.log("bcとbdは同じ値です");
}
else {
    console.log("bcとbdは異なる値です");
}
let bg = 100;
let bh = 50;
if(bg == bh){
   console.log("bgとbhは同じ値です");
}
else {
    console.log("bgとbhは異なる値です");
}
let bi = 100;
let bj = 50;
if(bi == 100 || bj == 10){
    console.log("biの式もしくはbjの式がTRUEです")
}
else{
    console.log("biの式とはbjの式がFALSEです")
}
let ca = 20;
let cb = 50;
if(ca == 100 || cb == 10){
    console.log("caの式もしくはcbの式がTRUEです")
}
else{
    console.log("caの式とはcbの式がFALSEです")
}
let cc = 20;
let cd = 50;
if(cc == 20 && cd == 10){
    console.log("ccの式とcdの式が両方TRUEです")
}
else{
    console.log("ccの式とcdの式のどちらかがFALSEです")
}
let ce = 20;
let cf = 100;
if(ce == 20 && cf == 50){
    console.log("ceの式とcfの式が両方TRUEです")
}
else{
    console.log("ceの式とcfの式のどちらか、もしくは両方がFALSEです")
}
let cg = 500;
if (cg != 20){
    console.log("cgは20ではありません")
}
else{
    console.log("cgは20です")
}
let ch = 20;
if (ch != 20){
    console.log("chは20ではありません")
}
else{
    console.log("chは20です")
}
let ci = "ptn1";
switch (ci){
    case "ptn1":
        console.log("ciの値はpth1です");
        break;
    case "ptn2":
        console.log("ciの値はpth2です");
        break;
    default:
        console.log("そのケースにも当てはまりませんでした")    
}
let cj = "ptn2";
switch (cj){
    case "ptn1":
        console.log("cjの値はpth1です");
        break;
    case "ptn2":
        console.log("cjの値はpth2です");
        break;
    default:
        console.log("そのケースにも当てはまりませんでした")    
}
let ck = "ptn3";
switch (ck){
    case "ptn1":
        console.log("ckの値はpth1です");
        break;
    case "ptn2":
        console.log("ckの値はpth2です");
        break;
    default:
        console.log("そのケースにも当てはまりませんでした")    
}
let cl;
for (cl=0; cl<10; cl++){
    console.log("console.log()を10回繰り返しています");
}
let cm;
for (cm=0; cm<10; cm++){
    console.log("cmの値は"+cm+"です");
}
let cn = 0;
while (cn < 10){
    console.log("cnの値は"+cn+"です");
    cn = cn +1;
}
let co = 0;
do {
    console.log("coの値は"+co+"です");
    co = co +1;
}while (co < 10);
let cp = 10;
do {
    console.log("cpの値は"+cp+"です");
    cp = cp +1;
}while (cp < 50);
let da;
let db;
for (da=0; da<3; da++){
    for (db=0; db<5; db++){
        console.log("daの値："+da+",dbの値"+db)
    }
}
let dc = 0;
console.log("cpの値は"+dc+"です");
dc = dc +1;
console.log("cpの値は"+dc+"です");
dc = dc +1;
console.log("cpの値は"+dc+"です");
dc = dc +1;
console.log("cpの値は"+dc+"です");
dc = dc +1;
console.log("cpの値は"+dc+"です");
dc = dc +1;
console.log("cpの値は"+dc+"です");
dc = dc +1;
let dd;
for (dd=0; dd<5; dd++){
    console.log("ddの値は"+dd+"です");
}
let de = 0;
while (de < 5){
    console.log("deの値は"+de+"です");
    de = de +1;
}
let df = 3;
while (df < 30){
    console.log("dfの値は"+df+"です");
    df = df +3;
}

let dg = 1;
let dh = 1;
let di = 0;
let dj = 10;
for (dh=1; dh<dj; dh++){
    console.log(+dh+"の段だよ");
    for (dg=1; dg<dj; dg++){
        let di = dg * dh;
        console.log(" "+dh+" ×　"+dg+"は "+di+"です");
    }
}


let dk = 1;
let dl = 1;
let dm = 0;
let dn = 10;
let array1 = []
for (dl=1; dl<dn; dl++){
    array1.push(+dl+"の段だよ");
    for (dk=1; dk<dn; dk++){
        let dm = dk * dl;
        array1.push(" "+dl+" ×　"+dk+"は "+dm+"です");
    }
}
console.log(array1);


let ea = 1;
let eb = 2;
let ec = 0;
console.log("Cの値："+ec);
ec = sum(ea,eb);
console.log("関数実行後のｃの値"+ec);
function sum(x,y){
    return x + y;
}

loop(3);
loop(5);
loop(7);

function loop(x){
    console.log("関数loopに"+x+"を渡して実行");
    let i;
    let j;
    let str;
    for (i=0; i<1; i++){
        str = "";
        for (j=0; j<x; j++){
            str = str + "★"
            console.log(str); 
        }
    }
}










