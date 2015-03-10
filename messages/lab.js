// Your JavaScript goes here...

function parse(){
  var xmlhttp = new XMLHttpRequest();
  var url = "data.json";
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      toUpdate = document.getElementById("messages");
      var arr = JSON.parse(xmlhttp.responseText);
      for(var i = 0; i < arr.length; i++){
        username = arr[i].username;
        content = arr[i].content;
        toUpdate.innerHTML += '<p class="message"> <span class="content">' + content + '</span> <span class="username">' + username+
        '</span> </p>'
      }
    }
  }
}
