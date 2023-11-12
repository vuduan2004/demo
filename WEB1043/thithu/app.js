function updateDonGia(){
    var loaiHang = document.getElementById("input-loaihang");
    var dongia = document.getElementById("input-dongia");
    if(loaiHang.value === "loai1"){
        dongia.value = "500000";
    } else if(loaiHang.value == "loai2"){
        dongia.value = "300000";
    } else if(loaiHang.value === "loai3"){
        dongia.value = "100000";
    }
}
function updatePhiVanChuyen(){
    var noiNhanHang = document.getElementsByName("noiNhanHang");
    var inputPhiVanChuyen = document.getElementById("input-phivanchuyen");
    if(noiNhanHang[0].checked){
        inputPhiVanChuyen.value = "0";
    } else if(noiNhanHang[1].checked){
        inputPhiVanChuyen.value = "30000";
    }
}
function datMua(){
    var khachhang = document.getElementById("khachHang").value;
    var soluong = document.getElementById("input-soluong").value;
    var inputThanhTien = document.getElementById("input-thanhtien");
    var inputDonGia = document.getElementById("input-dongia").value;
    var rdo = document.getElementById("noiNhanHang");

    var checkKhachHang = document.getElementById("check-khachhang");
    var checkSoLuong = document.getElementById("check-soluong");
    var checkNoiVanChuyen = document.getElementById("check-noivanchuyen");

    if(khachhang.trim() == ""){
        checkKhachHang.innerHTML = "Vui long nhap ten"
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

    inputThanhTien.value = inputDonGia * soluong;

}