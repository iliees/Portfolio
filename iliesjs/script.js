const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", () => {
    hundleMenu();
});
function hundleMenu() {
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}
function copyText() {
    var textToCopy = "bouchouarebilies@gmail.com";
    
    // Create a temporary input element
    var tempInput = document.createElement("input");
    
    // Set the value of the temporary input element to the text to be copied
    tempInput.setAttribute("value", textToCopy);
    
    // Add the temporary input element to the document
    document.body.appendChild(tempInput);
    
    // Select the text inside the temporary input element
    tempInput.select();
    
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);
    
    // Alert the user that the text has been copied
    alert("My email has been copied");
  }
  