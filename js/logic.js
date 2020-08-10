var basicURL='data/announcement.json';
var header="Facts";
var des="Golddddddddddddddddddddddddd!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";

function start(){
/*  xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   var myObj = JSON.parse(this.responseText);
   for(c in myObj){
     cand.push(myObj[c]);
   }

     }
   };*/

   fetch(basicURL).then(function(data){
     return data.json(); })
     .then(function(result){
       renderList(result.ann);
     });
    /* fetch('data/announcement.json' + '/4', {
       method: 'delete'
     }).then(function(response){
       console.log(response);
     }
  );*/


}
function renderList(list){
  var text="";
  for(var i=0;i<list.length;i++){
    text=text+getContent(list[i].header,list[i].description);
  }
  document.getElementById("displayContent").innerHTML = text;
}
function getContent(header,des){
  var html="<div class="+"col-12"+"><div class="+"card"+"><h3 class="+"card-header"+">";
  html=html+header;
  html=html+"</h3><div class="+"card-body"+">";
  html=html+des;
  html=html+"</div></div></div>";
  var h="<h1>HAHAHAHA</h1>";
  return html;

}
function addData(){
  var newData={
    "header":"THE GREAT HQR",
    "description":"GREAT"
  }
  fetch(basicURL, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(function(response){
      console.log(response.json());
    });

}
