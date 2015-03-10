// Your JavaScript goes here...

function parse(){
  var out = ""
  var xmlhttp = new XMLHttpRequest();
  var url = "data.json";


  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function(){
    toUpdate = document.getElementById("messages");
    var arr = JSON.parse(xmlhttp.responseText);
    for(var i = 0; i < arr.length; i++){
        username = arr[i].username;
        content = arr[i].content;
        toUpdate.innerHTML += '<p class="message">' + content + '</p> <p class="username">' + username+
        '</p>'
    }
  }
}
