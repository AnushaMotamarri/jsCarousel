let currentImageIndex=0
let images = document.getElementsByClassName('carousal-image')
let dots = document.getElementsByClassName('navigate-dot');
let numOfImages = images.length
document.getElementById('left-button').addEventListener('click',function (){
navigateToLeft()
})
document.getElementById('right-button').addEventListener('click',function (){
    navigateToRight()
})
function updateImageShown(idx){
    currentImageIndex=idx
    for (let img of images){
        img.classList.remove('image-visible')

    }
    images[idx].classList.add('image-visible')
    for (let dot of dots){
        dot.classList.remove('selected-dot')
    }
    dots[idx].classList.add('selected-dot')

}
function navigateToLeft(){
    if (currentImageIndex ===0){
        currentImageIndex=numOfImages-1
    }
    else
        currentImageIndex--
    updateImageShown(currentImageIndex)
}
function navigateToRight(){
    if (currentImageIndex ===numOfImages-1){
        currentImageIndex=0
    }
    else
        currentImageIndex++
    updateImageShown(currentImageIndex)
}

setInterval(function (){
   navigateToRight()
},2000)
