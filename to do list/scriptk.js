let listbtn = document.getElementsByTagName("li");
var i;
for (i = 0; i < listbtn.length; i++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(text);
    listbtn[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newitem() {
    let li = document.createElement("li");
    let inputvalue = document.getElementById("input").value; // Corrected to lowercase
    let t = document.createTextNode(inputvalue);
    li.appendChild(t);
    if (inputvalue === '') {
        alert("please write something!");
    } else {
        document.getElementById("item").appendChild(li); // Changed to "item"
        
        let span = document.createElement("span");
        let text = document.createTextNode("\u00d7");
        span.className = "close";
        span.appendChild(text);
        li.appendChild(span);

        span.onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
    document.getElementById("input").value = "";
}
