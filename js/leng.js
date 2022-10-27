
    if(localStorage.getItem("lang") && localStorage.getItem("dir")) {
        document.querySelector("html").setAttribute("dir" , localStorage.getItem("dir"))
        document.querySelector("html").setAttribute("lang" , localStorage.getItem("lang"))
        // document.querySelector("")
    }
    


