let light = 1;
        let show = 0;
        function toggle() {
            console.log("js added")
            if (light == 1) {

                document.body.style.backgroundColor = "black";

                light = 0;
            }
            else {

                document.body.style.backgroundColor = "white";


                light = 1;
            }
        }