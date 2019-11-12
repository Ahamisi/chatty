//welcome to js
//* get the browser width and height

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(function() {
      console.log("Service worker registered!");
    })
    .catch(function(err) {
      console.log(err);
    });
}
var defferedPrompt;

// console.log(defferedPrompt);

document.addEventListener("DOMContentLoaded", e => {
  var body = e.target.body.clientHeight;
  document.querySelector("#second-row").style.height = body + "px";
  document.querySelector("#message-container").style.height = body - 100 + "px";
  document.querySelector("#pick-receiver").style.height = body - 100 + "px";
});

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  defferedPrompt = event;
  return false;
});

function sendMessage() {
  // console.log(defferedPrompt);
  if (defferedPrompt) {
    defferedPrompt.prompt();
    defferedPrompt.userChoice.then(res => {
      console.log(res);
    });
  }
}
