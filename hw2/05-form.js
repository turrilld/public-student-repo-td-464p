// Add your code here
const form = document.getElementById("form");
form.addEventListener("submit", submit);

const modalDump = document.getElementById("modal-dump");
const modalClose = document.getElementById("modal-close");
const formDump = document.getElementById("form-dump");
modalClose.addEventListener("click", close);

function submit(event) {
  //prevent submit from automatically closing the modal and clearing the form
  event.preventDefault();

  formDump.innerHTML += `<p><b>Name:</b> ${document.getElementById("full-name").value}</p>`;
  formDump.innerHTML += `<p><b>Email:</b> ${document.getElementById("email").value}</p>`;
  formDump.innerHTML += `<p><b>Registration Status:</b> ${
    document.getElementById("registration-status").value
  }</p>`;
  if (document.getElementById("programming-languages").checked) {
    formDump.innerHTML += `<p> <b>Registered For:</b> ${
      document.getElementById("programming-languages").value
    }</p>`;
  }
  if (document.getElementById("operating-systems").checked) {
    formDump.innerHTML += `<p> <b>Registered For:</b> ${
      document.getElementById("operating-systems").value
    }</p>`;
  }
  if (document.getElementById("full-stack-web-dev").checked) {
    formDump.innerHTML += `<p> <b>Registered For:</b> ${
      document.getElementById("full-stack-web-dev").value
    }</p>`;
  }
  formDump.innerHTML += `<p><b>Anything Else:</b> ${
    document.getElementById("anything-else").value
  }</p>`;

  modalDump.style.display = "block";
}

function close() {
  formDump.innerHTML = "";
  modalDump.style.display = "none";
  // reset the form on modal close
  form.reset();
}
