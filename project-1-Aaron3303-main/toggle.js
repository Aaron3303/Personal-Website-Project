function toggleStyleSheet(){
        const element = document.getElementById("mainstyle");
        const fileName = element.getAttribute("href");
        var newFileName = "";
        if(fileName == "geocolors.css") newFileName = "redblack.css";
        else newFileName = "geocolors.css";
        element.setAttribute("href", newFileName);

        localStorage.setItem("fileName", newFileName);
        
}


window.onload = function(){
        const stylesheet = localStorage.getItem("fileName") || "geocolors.css";
   
        const element = document.getElementById("mainstyle");
   
        element.setAttribute("href", stylesheet);
}