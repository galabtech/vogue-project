
var arr = [];

function isuserexist(username, password) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].username == username) {
            return arr[i];
        }
        else if (arr[i].password == password) {
            return arr[i];
        }
    }
    return false;
}
// פונקציה שבודקת מתמש קייםץ מזינה לה יוזרנייםץ לולאת פור -תנאי אם היוזר ניים שווה ליוזרניים
// מחזיר FALSE מחזיר לי את היוזרת אם לא 

function createuser(x, y) {
    var obj = {
        username: x,
        password: y
    }
    return obj;
}

// יצירת יוזר מעבירה לפונקצייה ערכיםת בתוכה יוצרת אובייקט עם שם וסיסמאת מחזיר לי את האובייקט
function signup() {

    var x = document.getElementById("input").value
    var y = document.getElementById("input2").value
    var c = document.getElementById("input3").value
    var obj = {}

    obj.username = x;
    obj.password = y;
    obj.verifypassword = c;

    if (x == "") {
        document.getElementById("place").innerHTML = "username is mandatory";
    }
    else if (y == "") {
        document.getElementById("place").innerHTML = "password is mandatory";
    }
    else if (y != c) {
        document.getElementById("place").innerHTML = "password is not equal";
    }
    else {
        if (isuserexist(x) == false) {
            arr.push(createuser(x, y));
            document.getElementById("place").innerHTML = "login";
        }
        else {
            document.getElementById("place").innerHTML = "user is already exist";
        }
    }

}

// 


function fn() {
    var x = document.getElementById("input4").value;
    var y = document.getElementById("input5").value;
    var existuser = isuserexist(x);

    if (existuser !== false) {

        if (existuser.y == y && existuser.x == x) {
            document.getElementById("2place").innerHTML = "login";
        }
        else {
            document.getElementById("2place").innerHTML = "username is incorrect";
        }
    }
    else {
        document.getElementById("2place").innerHTML = "password is incorrect";
    }


}

function remove(username, password) {
    var username = document.getElementById("input6").value;
    var password = document.getElementById("input7").value;
    var existuser = isuserexist(username);


    for (var i = 0; i < arr.length; i++) {
        if (arr[i].username == username && arr[i].password == password) {
            arr.splice(arr[i], 1);
            document.getElementById("3place").innerHTML = "username remove";
        }
    }
}
