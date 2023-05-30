currentIndex = 0
images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]

setInterval(
  function () {

    //document.getElementById("img1").src = images[Math.random()*5] // wrong
    //  document.getElementById("img1").src = images[ Math.round(Math.random()*5)] // correct 

    currentIndex = Math.round(Math.random() * 5)
    document.getElementById("img1").src = images[currentIndex]



  }, 10000
)



function changeimage(arrowtype) {


  
  if (arrowtype == "right") {
    currentIndex = currentIndex == 5?0 : ++currentIndex
  }
  else if (arrowtype == "left") {
    currentIndex = currentIndex == 0?5 : --currentIndex
  }
  document.getElementById("img1").src = images[currentIndex]



}



