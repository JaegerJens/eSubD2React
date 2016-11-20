console.log("attribute view");
window.addEventListener("message", receiveModel, false);

function receiveModel(ev) {
  console.log("receive model for attribute view");
  console.log(ev.data);
}
