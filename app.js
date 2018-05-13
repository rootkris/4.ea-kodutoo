window.onload = function(){
  if(localStorage.getItem("tasks")==null){
    placeholder = []
    localStorage.setItem("tasks", JSON.stringify(placeholder))
  }
  else{
    oldElement()
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    var close = document.getElementsByClassName("close");
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  }
}
close = document.getElementsByClassName("close");

function storeData(tasks){
  storedData = JSON.parse(localStorage.getItem("tasks"))
  storedData.push(tasks)
  localStorage.setItem("tasks", JSON.stringify(storedData))
}

function retrieveAllData(){
  return JSON.parse(localStorage.getItem("tasks"))
}

function removeOneData(task){
  let index = Number(this.task)
  storedData = JSON.parse(localStorage.getItem("tasks"))
  let data = storedData.splice(index, 1)
  localStorage.setItem("tasks", JSON.stringify(storedData))
  console.log(this.task)
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    storeData(inputValue)
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      removeOneData(i)
    }
  }
}

function oldElement(){
  storedData = retrieveAllData()
  for(var j = 0; j<storedData.length; j++){
    var li = document.createElement("li");
    var inputValue = storedData[j]
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Database error at store position "+j);
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        removeOneData(i)
      }
    }
  }
}
