// Your JavaScript goes here...
function reqListener () {
  console.log(this.responseText);
}

function parse(){
  var req = new XMLHttpRequest();
  var url = "data.json";
  req.onload = reqListener;
  req.open("get", url, true);
  req.send();
  console.log("my dick is on fire")
  document.getElementById("messages").innerHTML;
}
