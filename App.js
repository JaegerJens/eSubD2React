console.log("main app");
var model = {
  hierarchy : ["s1", "s2"],
  sequence : ["m1", "m2", "m3", "m4", "m5"],
  document : {
    title : "Table of contents",
    filename : "toc.pdf"
  },
  attribute : {
    title : "Table of contents",
    filename : "toc.pdf"
  }
}

function sendModel(targetId) {
  var iframe = document.getElementById(targetId);
  target = iframe.contentWindow;
  console.log(target);
  target.postMessage(model, target);
}

function updateModel() {
  sendModel("hierarchyApp");
  sendModel("sequenceApp");
  sendModel("documentApp");
  sendModel("attributeApp");
}

function init() {
  updateModel();
  window.addEventListener("message", receiveAction, false);
}

function receiveAction(ev) {
  console.log(ev.data);
}
