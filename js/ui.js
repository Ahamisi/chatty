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
let pick_receiver = document.querySelector("#pick-receiver");

// console.log(defferedPrompt);

document.addEventListener("DOMContentLoaded", e => {
  var body = e.target.body.clientHeight;
  document.querySelector("#second-row").style.height = body + "px";
  document.querySelector("#message-container").style.height = body - 100 + "px";
  pick_receiver.style.height = body - 100 + "px";
});

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  defferedPrompt = event;
  return false;
});

function sendMessage() {
  console.log(defferedPrompt);
  if (defferedPrompt) {
    defferedPrompt.prompt();
    defferedPrompt.userChoice.then(res => {
      console.log(res);
    });
  }
}

document.getElementById("messageText").addEventListener("keyup", event => {
  let enter = event.which;
  if (event.keyCode == 13) {
    console.log(event.target.value);
  }
});

function name(index) {}

(() => {
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", i);
    div.setAttribute("onclick", `name(${i + 1})`);
    div.innerHTML = `
    <div class="card-body">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <img src="./assets/images/avatar.png" alt="" style="float: left">
                    <div class="circle circle-success active"></div>
                <span class="message">
                    <h5>Jafaris Long <span style="float: right">Just Now</span></h5>
                    <p>Do you remember last night? Ho.. <span class="badge badge-secondary pink message-count" style="float: right">5</span></p>
                </span>
            </div>
        </div>
    </div>`;
    pick_receiver.appendChild(div);
  }
})();
