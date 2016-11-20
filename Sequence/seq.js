console.log("sequence view");
window.addEventListener("message", receiveModel, false);

function receiveModel(ev) {
  console.log("receive model for sequence view");
  console.log(ev.data);
}
