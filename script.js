
document.getElementById("name").oninput = (e) => document.getElementById("card-name").innerText = e.target.value;
document.getElementById("designation").oninput = (e) => document.getElementById("card-designation").innerText = e.target.value;
document.getElementById("idNo").oninput = (e) => document.getElementById("card-idNo").innerText = e.target.value;
document.getElementById("dob").oninput = (e) => document.getElementById("card-dob").innerText = e.target.value;
document.getElementById("email").oninput = (e) => document.getElementById("card-email").innerText = e.target.value;
document.getElementById("phone").oninput = (e) => document.getElementById("card-phone").innerText = e.target.value;
document.getElementById("website").oninput = (e) => document.getElementById("card-website").innerText = e.target.value;

document.getElementById("photo").onchange = (e) => {
  const reader = new FileReader();
  reader.onload = function(event) {
    document.getElementById("preview-photo").src = event.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
};

document.getElementById("bg").onchange = (e) => {
  const reader = new FileReader();
  reader.onload = function(event) {
    document.getElementById("card-front").style.backgroundImage = `url(${event.target.result})`;
    document.getElementById("card-front").style.backgroundSize = "cover";
  };
  reader.readAsDataURL(e.target.files[0]);
};

function downloadCard() {
  html2canvas(document.getElementById("card-front")).then(canvas => {
    const link = document.createElement('a');
    link.download = 'id-card-front.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
