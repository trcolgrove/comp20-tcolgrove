// Your JavaScript goes here...
function reqListener () {
  console.log(this.responseText);
}


function parse(){
  var out = ""
  var xmlhttp = new XMLHttpRequest();
  var url = "data.json";

  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          parse(myArr);
    }
  for(var i = 0; i < arr.length; i++){
        out += arr[i].content;
        myFunction(myArr);
  }
  req.onload = reqListener;
  document.getElementById("messages").innerHTML = out;
}
