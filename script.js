let imgBox=document.getElementById("imgBox");
let qrImg=document.getElementById("qrImage");
let qrtext=document.getElementById("qrText");
function generator(){
    if(qrtext.value.length > 0){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    imgBox.classList.add("show-img");
    }
    else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000);
    }
}
