var cat = {
    name : "meo",
    color : "blue",
    height : 3.4,
    sua : function () {
        console.log("gau gau")
    },
    run : function(){
        console.log("run run")
    }
}
// khoi tao mot object ten la dog
// truy cap hoac la update gia tri trog object
cat.name = "meo2.0";
cat['name'] = "bbb";
alert(dog.name)
// goi phuong thuc trong object
cat.sua();
cat.run();
// khoi tao mot class trong js
function dog (name, color, height, breed){
    this.bug = ["bug1", "bug2", "bug3"];
    this.name;
    this.color;
    this.height;
    this.breed;
    this.sua = function(){
        console.log("sua sua");
    }
}

// this : dung de chi thuoc tinh cua funciton dog
var dog1 = new cat("a", "red", "3.2", "male");
var dog2 = new cat("ab", "blue", "3.4", "maleeeeee");
console.log(dog1.bug[0]); // 0 la vi tri cua bug 1
// bang cah nay, khoi tao bao nhieu dog tuy y
document.write(dog1.name);
document.write(dog2.breed);
// catKey thu tu tu 0 den het cua mang cat
for (const catKey in cat) {
    document.write(cat[catKey].name+"<br>");
    }

