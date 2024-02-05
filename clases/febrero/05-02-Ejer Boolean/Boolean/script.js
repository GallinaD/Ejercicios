var a = [1,2,-1,4,6,6];
var b = [1,2,3,4,6,6];
var condicion1 = a[0]>a[2]&&a[1]<a[3]&&a[4]==a[5];
var condicion2 = b[0]>b[2]&&b[1]<b[3]&&b[4]==b[5];
var result1 = new Boolean(condicion1);

if(result1.valueOf){
  console.log("Esta ordenado");
}

//console.log(new Boolean(condicion1));
//console.log(new Boolean(condicion2));