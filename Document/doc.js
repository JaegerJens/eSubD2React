console.log("document view");
window.addEventListener("message", receiveModel, false);

function receiveModel(ev) {
  console.log("receive model for document view");
  console.log(ev.data);
}
