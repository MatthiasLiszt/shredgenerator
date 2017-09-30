
function shredgenerator(){
 console.log("shredgenerator running");
 
 var ax=Math.round(Math.random()*64);
 var ay=Math.round(Math.random()*64);
 var bx=Math.round(Math.random()*64);
 var by=Math.round(Math.random()*64);
 var cx=Math.round(Math.random()*64);
 var cy=Math.round(Math.random()*64);
 
 return {a: {x: ax, y: ay} , b: {x: bx, y: by}, c: {x: cx, y: cy}};
}

function shredSVG(p){
 var head="<svg width=64 height=64>";
 var tail=" '></svg>";
 var body="<path d='";
 var cood=[];

 console.log("shredSVG running");
 console.log("p length "+p.length);
 cood.push(" M "+p.a.x+" "+p.a.y);
 cood.push(" L "+p.b.x+" "+p.b.y);
 cood.push(" L "+p.c.x+" "+p.c.y);
 console.log(JSON.stringify(cood));

 var rrr=head+body+cood[0]+cood[1]+cood[2]+tail;
 console.log(rrr);

 return rrr;
}