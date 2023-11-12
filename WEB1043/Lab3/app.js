let tt = document.getElementById("tt");

function toan_hang(value) {
    tt.value += value;
}

function lam_lai() {
    tt.value = "";
}

function thuc_hien() {
    try{
        tt.value = eval(tt.value);
    }catch{
        tt.value = "Error";
    }
}
