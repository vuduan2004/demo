var curentIndex = 0
var arrImg = ['image/anh1.png', 'image/anh2.png', 'image/anh3.png', 'image/anh4.png', 'image/anh5.png']
var slidershow = document.getElementById("slidershow")
var interValID
function showImg() {
    slidershow.src = arrImg[curentIndex]
}
function next(){
    curentIndex = (curentIndex + 1) % arrImg.length
    showImg()
}
function back(){
    curentIndex = (curentIndex -1 + arrImg.length) % arrImg.length
    showImg()
}
function start(){
    interValID = setInterval(next, 1000)
}
function stop(){
    clearInterval(interValID)
}
function changeIndexSlider(index){
    curentIndex = index;
    showImg();
}