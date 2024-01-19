let light=1;
function toggle(){
    console.log("js added")
    if(light==1){
      document.querySelectorAll(".bg-light").forEach(element => {
        element.classList.add('bg-dark');
        element.classList.remove('bg-light');
        
      });
      document.querySelectorAll('h3').forEach(element=>{
        element.style.color='#00bde7'
      });
      
      document.querySelectorAll(".border-info").forEach(element => {
        element.classList.add('border-white');
        element.classList.remove('border-info');
        
      });
      document.querySelectorAll(".text-black").forEach(element => {
        element.classList.add('text-white');
        element.classList.remove('text-black');
        
      });
      document.querySelectorAll(".bg-white").forEach(element => {
        element.classList.add('bg-dark');
        element.classList.remove('bg-white');
        
      });
      let foot=document.getElementById('foot');
      foot.style.backgroundColor="white";
      foot.style.color="black";
        light=0;
        return;
    }
    document.querySelectorAll('h3').forEach(element=>{
        element.style.color='black'
      })
      document.querySelectorAll(".bg-dark").forEach(element => {
        element.classList.add('bg-light');
        element.classList.remove('bg-dark');
        console.log(element)
      });
     
      document.querySelectorAll(".border-white").forEach(element => {
        element.classList.add('border-info');
        element.classList.remove('border-white');
        console.log(element)
      });
      document.querySelectorAll(".text-white").forEach(element => {
        element.classList.add('text-black');
        element.classList.remove('text-white');
        console.log(element)
      });
      document.querySelectorAll(".bg-dark").forEach(element => {
        element.classList.add('bg-white');
        element.classList.remove('bg-dark');
        console.log(element)
      });
      let foot=document.getElementById('foot');
      foot.style.backgroundColor="black";
      foot.style.color="white";
        light=1;
    
}