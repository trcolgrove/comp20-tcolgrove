// Your JavaScript goes here...
function reqListener () {
  console.log(this.responseText);
}


function parse(){
  var out = ""
  var xmlhttp = new XMLHttpRequest();
  var url = "data.json";

  xmlhttp.onreadystatechange = function(){
  for(var i = 0; i < arr.length; i++){
        out += arr[i].content;
        myFunction(myArr);
        console.log("doooooodoodoo")
        document.getElementById("messages").innerHTML = out;
      }
  }
}
