function showAlert() {
  alert("This is an alert box!");
}
function PromptName() {
  var name = prompt("What is your name?"); // Prompt the user for their name
  //alert("Hello, " + name);
  if (name != null && name !='') {
    document.getElementById("name").innerHTML = "Hello, " + name; //`Hello, ${name}`;
  } else {
    document.getElementById("name").innerHTML = "Hello, Stranger";
  }
}
function ConfirmAction() {
  var r = confirm("Press a button!");
  if (r == true) {
    document.getElementById("confirm").innerHTML = "You pressed OK!";
  } else {
    document.getElementById("confirm").innerHTML = "You pressed Cancel!";
  }
}

//showAlert();
//showPrompt();
