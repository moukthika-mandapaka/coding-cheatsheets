// script.js
console.log("CodeSweets loaded 🍬");

function copyCode(id) {
  const code = document.getElementById(id).innerText;
  navigator.clipboard.writeText(code)
    .then(() => alert('Code copied to clipboard!'))
    .catch(err => alert('Failed to copy code: ' + err));
}
