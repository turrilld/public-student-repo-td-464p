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

  formDump.innerHTML += `<p>Name: ${document.getElementById("full-name").value}</p>`;
  formDump.innerHTML += `<p>Email: ${document.getElementById("email").value}</p>`;
  formDump.innerHTML += `<p>Registration Status: ${
    document.getElementById("registration-status").value
  }</p>`;
  if (document.getElementById("programming-languages").checked) {
    formDump.innerHTML += `<p> Registered For: ${
      document.getElementById("programming-languages").value
    }</p>`;
  }
  if (document.getElementById("operating-systems").checked) {
    formDump.innerHTML += `<p> Registered For: ${
      document.getElementById("operating-systems").value
    }</p>`;
  }
  if (document.getElementById("full-stack-web-dev").checked) {
    formDump.innerHTML += `<p> Registered For: ${
      document.getElementById("full-stack-web-dev").value
    }</p>`;
  }
  formDump.innerHTML += `<p>Anything Else: ${document.getElementById("anything-else").value}</p>`;

  modalDump.style.display = "block";
}

function close() {
  formDump.innerHTML = "";
  modalDump.style.display = "none";
  // reset the form on modal close
  form.reset();
}
