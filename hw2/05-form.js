// Add your code here
const form = document.getElementById("form");
form.addEventListener("click", submit);

const modalDump = document.getElementById("modal-dump");
const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", close);

function submit() {
  //   $("#modal").modal("show");
  //   window.alert("ran");
  modalDump.style.display = "block";
}

function close() {
  modalDump.style.display = "none";
}
