// bai 1
var a = prompt("nhap so a: ");
var b = prompt("nhap so b: ");
var x = a^2 + b^2;
var c = x^2;
alert("Tu dinh ly Pythagorean ta co c = " + c);
// bai 2
var m = 3600;
var sao = m / 360;
alert("dien tich la" + sao + "sào");
var hecta = m / 1000;
alert("dien tich la" + hecta + "hec ta");
var mau = m / 1000;
alert("dien tich la" + mau + "mẫu");
// bai 3
var cn = prompt("Nhập cân nặng: " );
var ccc = prompt("Nhập chiều cao: " );
var cc = ccc/100;
var BMI = cn/(cc^2);
if(BMI>=1 && BMI<=100){
if(BMI<=18.5){
    alert("Chỉ số BMI: "+BMI+" Bạn đang thiếu cân");  
}else if(BMI >=18 &&BMI<=29){
    alert("Chỉ số BIM: "+BMI+"Bạn đang ở mức bình thường");  
}else if(BMI>=30){
    alert("Chỉ số BIM: "+BMI+"Bạn đang thừa cân");  }
}
// bài4
const theList = ['lauren','Kevin',true,35,null,undefined,['one','two']];
theList.shift();
theList.pop();
theList.unshift('FIRST')
theList.splice(3,0,'hello word');
theList.splice(2,0,'middle');
theList.push("LAST");
console.log(theList)
// //bài 5
var x = 10+ Math.round(5 * Math.random());
var a = prompt('Số nhập vào:');
if(a == x){
alert('Chúc mừng bạn đã đoán trúng');
}else if(a > x){
alert('Giá trị của bạn lớn hơn số bí mật')
}else if(a<x){
    alert('Giá trị của bạn nhỏ hơn số bí mật')
}