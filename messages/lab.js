// Your JavaScript goes here...

function parse(){
  var out = ""
  var xmlhttp = new XMLHttpRequest();
  var url = "data.json";


  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function(){
  for(var i = 0; i < arr.length; i++){
        var arr = JSON.parse(xmlhttp.responseText);
        out += arr[i].content;
        console.log("doooooodoodoo")
        document.getElementById("messages").innerHTML = out;
      }
  }
}
