function bai1(){
    var a = prompt("Toan hang a: ");
  var b = prompt("Toan hang b: ");
  var o = prompt("Toan tu: ");
  switch(o){
      case '+':
          var kq = Number(a)+Number(b);
          alert('Tong: '+ kq);
          break;
          case '-':
          var kq = Number(a)-Number(b);;
          alert('hieu: '+ kq);
          break;
          case '*':
          var kq = Number(a)*Number(b);;
          alert('Tich: '+ kq);
          break;
          case '/':
          var kq = Number(a)/Number(b);;
          alert('Thuong: '+ kq);
          break;
          default:
              alert(o + "Khong phai la toan tu");
              break;
  }
  }
  function bai2(){
    for (let i = 1; i <= 10; i++) {
      console.log("Bang nhan " + i + " :");
        for (let j = 1; j <= 10; j++) {
          console.log(i + " x " + j + " = " + i*j);
        }
        console.log();
      }
  }