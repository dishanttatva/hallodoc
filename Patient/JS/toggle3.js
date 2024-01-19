let light=1;
let show=0;
function toggle(){
    console.log("js added")
    if(light==1){
        document.getElementById('heading').style.color="#00bde7";
        document.body.style.backgroundColor="black";
        document.getElementById('terms').style.color="#00bde7"
        light=0;
    }
    else{
        document.getElementById('heading').style.color="black";
        document.body.style.backgroundColor="white";
        document.getElementById('terms').style.color="black";

        light=1;
    }
}