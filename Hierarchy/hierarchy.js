console.log("hierarchy view");
window.addEventListener("message", receiveModel, false);

function receiveModel(ev) {
  console.log("receive model for hierarchy view");
  console.log(ev.data);
}
