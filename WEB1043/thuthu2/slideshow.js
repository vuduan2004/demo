var currentIndex = 0;
var arrImg = ['image/anh1.png', 'image/anh2.png', 'image/anh3.png', 'image/anh4.png', 'image/anh5.png']
var slideshow= document.getElementById("slideshow")
var interValID;
function showImage(){
    slideshow.src = arrImg[currentIndex]
}
function next(){
    currentIndex = (currentIndex +1) % arrImg.length
    showImage()
}
function starlideShow(){
   interValID =  setInterval(next, 1500)
}
function start(){
    interValID = setInterval(next, 1500)
}
function stop(){
    clearInterval(interValID)
}
function back(){
    currentIndex = (currentIndex -1 + arrImg.length) % arrImg.length
    showImage()
}
starlideShow();
function chon(index){
    currentIndex = index;
    showImage()
}

