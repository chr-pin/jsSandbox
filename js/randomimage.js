const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];
let tempIndex = 0;


myButton.addEventListener('click', changeImage);

function changeImage() {

    
    document.getElementById('info-text').innerText = ''
    let randomIndex = Math.floor(Math.random() * images.length)
    if (randomIndex == tempIndex) {
        
        document.getElementById('info-text').innerText = 'Sama pilt mis varem!'
        
    } else {
        
        image.src = "gitimages/" + images[randomIndex]
        tempIndex = randomIndex

        }
    
    
}