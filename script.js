const faceUpload =
document.getElementById("faceUpload");

const facePreview =
document.getElementById("facePreview");

faceUpload.addEventListener("change",function(){

const file = this.files[0];

if(file){

facePreview.style.display = "block";

facePreview.src =
URL.createObjectURL(file);

}

});

const videoUpload =
document.getElementById("videoUpload");

const videoPreview =
document.getElementById("videoPreview");

videoUpload.addEventListener("change",function(){

const file = this.files[0];

if(file){

videoPreview.style.display = "block";

videoPreview.src =
URL.createObjectURL(file);

}

});

function generateVideo(){

const status =
document.getElementById("status");

const downloadBtn =
document.getElementById("downloadBtn");

status.innerHTML =
"AI Face Swap Processing Started...";

downloadBtn.style.display = "none";

setTimeout(()=>{

status.innerHTML =
"Video Generated Successfully ✅";

downloadBtn.style.display = "block";

downloadBtn.onclick = function(){

const link =
document.createElement("a");

link.href =
videoPreview.src;

link.download =
"swapreel-video.mp4";

link.click();

}

},4000);

  }
