window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById("messageInput").value.toUpperCase();
    document.querySelector("span#messageInput").innerText = input;
    document.querySelector("div#output").removeAttribute("class");
  };
};

let amplifier = document.getElementById('louder');
amplifier.onclick = function(event) {
  // event.preventDefault();
  const input = document.getElementById("span#messageInput").style.fontSize = "larger"
  document.querySelector("span#messageInput").innerText = input;
  // console.log("input")
  };