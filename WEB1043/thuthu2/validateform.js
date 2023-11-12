function updateDongia(){
    var loaihang = document.getElementById("loaihang");
    var dongia = document.getElementById("dongia");
    if(loaihang.value === "loai1"){
        dongia.value = "500000";
    } else if(loaihang.value === "loai2"){
        dongia.value = "300000";
    } else if(loaihang.value === "loai3"){
        dongia.value = "100000";
    }
}
function updatePhiVanChuyen(){
    var noiNhanHang = document.getElementsByName("noinhanhang");
    var phiVanChuyen = document.getElementById("phivanchuyen");
    if(noiNhanHang[0].checked){
        phiVanChuyen.value = "0";
    } else if(noiNhanHang[1].checked){
        phiVanChuyen.value = "30000";
    }
}
function datMua(){
    var khachhang = document.getElementById("khachhang").value;
    var loaihang = document.getElementById("loaihang").value;
    var soluong = document.getElementById("soluong").value;
    var dongia = document.getElementById("dongia").value;
    var thanhtien = document.getElementById("thanhtien");

    var checkKhachHang = document.getElementById("check-khachhang");
    var checkSoLuong = document.getElementById("check-soluong");
    
    if(khachhang.trim() == ""){
        checkKhachHang.innerHTML = "vui long nhap ten "
    } else {
        checkKhachHang.innerHTML = ""
    }

    if(soluong.trim() == ""){
        checkSoLuong.innerHTML = "vui long nhap so luong"
    } else if(isNaN(soluong)){
        checkSoLuong.innerHTML = "so luong phai la so"
    } else {
        checkSoLuong.innerHTML = ""
    }

    thanhtien.value = dongia * soluong;
}