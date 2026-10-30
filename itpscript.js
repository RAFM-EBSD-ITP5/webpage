const imageArea= document.getElementById("imagearea");
const inputImg= document.getElementById("inputimg");
const imgView= document.getElementById("imageview");

/* change= when change happens will display on webpage*/
inputImg.addEventListener("change",uploadImage);


/* got imag efrom inupt in html*/

function uploadImage(){
	/* location of uploaded image = inputImg.files[0 */
	/* make image link*/
	/*` is BACKTICK*/

	let imgLink=URL.createObjectURL(inputImg.files[0]);
	imgView.style.backgroundImage=`url(${imgLink})`;
	imgView.textContent="";
	imgView.style.border=0;
}