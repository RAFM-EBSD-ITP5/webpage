const imageArea= document.getElementById("imagearea");
const inputImg= document.getElementById("inputimg");
const imgView= document.getElementById("imgview");

/* change= when change happens will display on webpage*/
inputImg.addEventListener("change",uploadImage);


/* got imag efrom inupt in html*/

function uploadImage(){
	const deltaferriteimage = inputImg.files[0];
	/* location of uploaded image = inputImg.files[0 */
	/* make image link*/
	/*` is BACKTICK used for yrl */

	let imgLink=URL.createObjectURL(deltaferriteimage);
	imgView.style.backgroundImage="url(${imgLink})";
	imgView.textContent="";
	imgView.style.border=0;

	/* const can be reassigned but let can */

	const downloadImg = document.getElementById("downloadImage");
	downloadImg.href = imgLink;
	downloadImg.download = "deltaferriteimage.png";
	downloadImg.hidden = false;
	
	sendImagetobackend(deltaferriteimage);
}
async function sendImagetobackend(deltaferriteimage) {
    /*async = gives java script a Promise. A Promise is an object representing a result that will be available later.*/ 
	const imageinfotosend = new FormData();
	imageinfotosend.append("file", deltaferriteimage, "deltaferriteimage.tif");

	const response = await fetch("https://sample-backend-988589084835.europe-west1.run.app", {
		method: "POST",
		body: imageinfotosend,
	});
}