function test(){
    var acount = '11ss--22222!s21';

    console.log("hello")
}

function getData() {
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', requestURL);
    xhr.onload = (e) => {
      console.log(xhr.response, e);
      console.log(document.getElementById("p").innerHTML = xhr.response);
    };
    xhr.send();
}