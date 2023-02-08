function saklar() {

// ruang keluarga
    let toggle1 = document.getElementById("default-toggle1");
    let toggle2 = document.getElementById("default-toggle2");
    let toggle3 = document.getElementById("default-toggle3");
    
    let Lampu1 = document.getElementById("Lampu1");
    let Lampu2 = document.getElementById("Lampu2");
    let Lampu3 = document.getElementById("Lampu3");  
    
    if (toggle1.checked){


            // if (lamp == 1){
            Lampu1.src = "ASETS/IMAGES/on.gif";
            // }
    
            // if (lamp == 2){
            //     Lampu2.src = "ASETS/IMAGES/on.gif"; 
            // }
    
            // if (lamp == 3){
            //     Lampu3.src = "ASETS/IMAGES/on.gif";
            // }
    }else {
        // if (lamp == 1){
            Lampu1.src = "ASETS/IMAGES/off.gif";
        // }

        // if (lamp == 2){
            // Lampu2.src = "ASETS/IMAGES/off.gif"; 
        // }

        // if (lamp == 3){
        //     Lampu3.src = "ASETS/IMAGES/off.gif";
        // }
    }

    if (toggle2.checked){
        Lampu2.src = "ASETS/IMAGES/on.gif"; 
    }else {
        Lampu2.src = "ASETS/IMAGES/off.gif"; 
    }

    if (toggle3.checked){
        Lampu3.src = "ASETS/IMAGES/on.gif"; 
    }else {
        Lampu3.src = "ASETS/IMAGES/off.gif"; 
    }


    // ruang makan

    let toggle4 = document.getElementById("default-toggle4")
    let Lampu4 = document.getElementById("Lampu4");

    if(toggle4.checked){
        Lampu4.src = "ASETS/IMAGES/on.gif"

    }else{
        Lampu4.src = "ASETS/IMAGES/off.gif"
    }

    // ruang tidur

    let toggle5 = document.getElementById("default-toggle5");
    let toggle6 = document.getElementById("default-toggle6");
    let Lampu5 = document.getElementById("Lampu5");
    let Lampu6 = document.getElementById("Lampu6");

    if( toggle5.checked){
        Lampu5.src = "ASETS/IMAGES/on.gif";

    }else{
        Lampu5.src = "ASETS/IMAGES/off.gif";
    }
    if (toggle6.checked){

        Lampu6.src =  "ASETS/IMAGES/on.gif";
    }else {
        Lampu6.src =  "ASETS/IMAGES/off.gif";
    }


    // ruang tamu

    let toggle7     = document.getElementById("default-toggle7");
    let toggle8     = document.getElementById("default-toggle8");
    let toggle9     = document.getElementById("default-toggle9");
    let toggle10    = document.getElementById("default-toggle10");
    let Lampu7      = document.getElementById("Lampu7");
    let Lampu8      = document.getElementById("Lampu8");
    let Lampu9      = document.getElementById("Lampu9");
    let Lampu10     = document.getElementById("Lampu10");

    if( toggle7.checked){
        Lampu7.src = "ASETS/IMAGES/on.gif";

    }else{
        Lampu7.src = "ASETS/IMAGES/off.gif";
    }
    if (toggle8.checked){

        Lampu8.src =  "ASETS/IMAGES/on.gif";
    }else {
        Lampu8.src =  "ASETS/IMAGES/off.gif";
    }
    if( toggle9.checked){
        Lampu9.src = "ASETS/IMAGES/on.gif";

    }else{
        Lampu9.src = "ASETS/IMAGES/off.gif";
    }
    if (toggle10.checked){

        Lampu10.src =  "ASETS/IMAGES/on.gif";
    }else {
        Lampu10.src =  "ASETS/IMAGES/off.gif";
    }


}






