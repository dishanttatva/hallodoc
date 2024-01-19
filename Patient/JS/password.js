function showhide(){
    ico=document.getElementById('ico');
    floatinginput2=document.getElementById('floatingInput2');
    if(show==0){
        ico.src="../../SRSScreenShorts/eye-slash.svg";
        floatinginput2.type='text';
        show=1;
    }
    else{
        ico.src="../../SRSScreenShorts/eye.svg";
        floatinginput2.type='password';
        show=0
    }
}