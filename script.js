function generateQR() {
  let container = document.getElementById("qrcode");
  container.innerHTML = "";
  let text = document.getElementById("text").value;
  if (text.trim() === "") {
    alert("Please enter some text or URL");
    return;
  }
  new QRCode(container, {
    text: text,
    width: 200,
    height: 200
  });
}