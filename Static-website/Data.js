data = {

    services: [

        {

            name: "Application Services",
            image: "images/application.jpg",
            features: ["Latest Tech", "Micro Service Architure", "Cloud Native", "Test Driven development"]

        },

        {

            name: "Testing Services",
            image: "images/Testing.png",
            features: ["End to end testing ", "Performance testing", "Quanlity Assurance", "Power tools"]

        },

        {

            name: "Infra Services",
            image: "images/ITInfra.png",
            features: ["Cloud service ", "Low cost", "Premium Hardware", "High Performance"]

        }

    ]


}

/*
let code = ""
for (let service of data.services) {

    code += "<div class = 'service-box'>"
    code += "<h3>" + service.name + + "</h3>"
    code += "<img src='" + service.image + "'>"
    code += "<div class = 'features'> <ul>"
    for (let features of service.features) {
        code += "<li>" + features + "</li>"

    }

    code += "</ul> <div> </div>"

}
*/


let code = ""


for (let service of data.services) {
    code += "<div class='service-box'>"
    code += "<h3>" + service.name + "</h3>"
    code += "<img src='" + service.image + "'>"
    code += "<div class='features'> <ul>"
    for (let feature of service.features) {

         let x= "onclick=myfunction('"+ encodeURIComponent(feature) + "')"
        // alert(x)
        code += "<li "+x+" >" + feature + "</li>"
    }

    code += "</ul></div></div>"

}

var myfunction = function alertmsg(msg) {
    alert(decodeURIComponent(msg))
}



var upclick = function upclick() {

    document.getElementById("slide-area").style.display = "none" 
    document.getElementById("upid").style.visibility = "hidden"
    document.getElementById("downid").style.visibility = "visible"
    
 
}

var downclick = function downclick() {

    document.getElementById("slide-area").style.display = "block" 
    document.getElementById("downid").style.visibility = "hidden" 
    document.getElementById("upid").style.visibility = "visible"
    
 
}



document.getElementById("services-wrapper").innerHTML = code




//document.getElementById("services-wrapper").innerHtml = code