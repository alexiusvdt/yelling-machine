window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const input = document.getElementById("messageInput").value.toUpperCase();
    document.querySelector("span#messageInput").innerText = input;
    document.querySelector("div#story").removeAttribute("class");
  };
};