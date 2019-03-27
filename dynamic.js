function loadJson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("applicaton/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState ===4 && xhr.status=="200")
    {
    callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text)
{
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  carrer(data.carrer);
  education(data.education);
  skills(data.skills);
})
var child1=document.querySelector(".child1")
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  child1.append(image);
  var h2=document.createElement("h2");
  h2.textContent=p.name;
  child1.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.design;
  child1.append(h3);
  var h4=document.createElement("h4");
  h4.textContent=p.mobile;
  child1.append(h4);
  var h5=document.createElement("h5");
  h5.textContent=p.email;
  child1.append(h5);

}




var child2=document.querySelector(".child2");
function carrer(ca){
  var h1=document.createElement("h1");
  h1.textContent="Carrer Objective";
  child2.append(h1);

  var hr=document.createElement("hr");
  child2.append(hr);

var pe=document.createElement("pe");
pe.textContent=ca.info;
child2.append(pe);
}




function education(edu){
  var h1=document.createElement("h1");
  h1.textContent="Education Details";
  child2.append(h1);

  var hr=document.createElement("hr");
  child2.append(hr);
  var table=document.createElement("table");

  var tr1="<tr><th> qualification</th><th>institute</th><th>percentage</th><th>yop</th></tr>";
 var tr2="";
 for(i=0;i<edu.length;i++)
 {
   tr2=tr2+"<tr><td>"+ edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].yop+"</td></tr>";
 }
 table.innerHTML=tr1+tr2;

  child2.append(table);

}
function skills(s){
  var rr=document.createElement("h2");
  rr.textContent="skills";
  child2.append(rr);
  var ul=document.createElement("ul");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  child2.append(ul);
}
