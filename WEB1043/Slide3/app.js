// var x = 10;
// // câu lệnh thực hiện kiểm tra giá trị của x
// // sau đó chạy câu lệnh tương ứng
// if(x>10) {
//     alert("x >10");
// } else {
//     alert("x <= 10");
// }
// // mini game : game xuc sac
// var dulieu = prompt("nhap gia tri la 1 - 0 :");
// var random = Math.floor(Math.random()*6) + 1;
// if(dulieu==1) {
//     var dai = "bai chon dai ket qua la" + random+"trung thuong";
//     var tieu = "bai chon tieu ket qua la" + random+"trung thuong"
//     var message = random >=4 && random<=6 ? dai : tieu;
//     alert (message);  
//     // if(random>=4 && random<=6) {
//     //     alert("bai chon dai ket qua la" + random+"trung thuong");
//     // } else{
//     //     alert("bai chon dai ket qua la" + random + "khong trung thuong");
//     // }
// } else if (dulieu==0){
//     var tieu = "bai chon tieu ket qua la" + random+"trung thuong"
//     var dai = "bai chon dai ket qua la" + random+"trung thuong";
//     var message = random>=1 && random<=3 ? tieu : dai;
//     alert (message);
//     // if(random>=1 && random<=3) {
//     //     alert("bai chon tieu ket qua la" + random +"trung thuong");
//     // } else {
//     //     alert("bai chon tieu ket qua la" + random + "khong trung thuong");
//     // }
// } else {
//     alert("vui long chon 1 hoac 0");
// }
// var x = prompt("vui long nhap 1 so tu 1 den 5");
// switch(X){
//     case 1 :{
//             alert("ban chon 1");
//     } break;
//     case 2 : {
//         alert("ban chon 2");
//     } break;
//     default :
//     {
//         alert("ban chon 1 so khong phai 1 hoac 2");
//     }
// }
// nhap 1 so tu 1 den 10 , neu kh phai tu bat nhap lai
// do {
//     var mess = prompt("nhap so tu 1 den 10");

// } while(mess<1 || mess>10)
// alert("gia tri mess vua nhap la" + mess);
var mang = [1, 2, 3, 5, 4, 11, 14];
for (let i = 0; i < mang.length; i++) {
    if(mang[i]==5) continue; // bỏ qua câu lênhj phía dưới và đi tiếp vòng lặp tiếp theo
    console.log(mang[i]);
    // if(mang[i]==5) break;
    
}