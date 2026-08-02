let text;

function cek(){
  text = document.getElementById("inp").value;
  if (text === "112233") {
    window.open("berangkas.html");
    alert("Anda membuka berangkas!");
  } else {
    alert("Password salah!");
  };
};

function button() {
  cek();
};

document.getElementById("inp").addEventListener("keydown", function(event){
  if (event.key === "Enter") {
    cek();
  }
});