let i = 0;
let time = 3000;

let images =  [
    "./images/hdspace2.jpg","./images/gundam2.jpg", "./images/hdspace4.jpg", "./images/hdspace5.jpg", "./images/gundam1.jpg"
]
// images[0] = "./images/gundam1.jpg"

// let rotater = document.getElementsByClassName( 'rotater' ).getAttribute( 'src' );
// rotater.innerHTML = rotater;

function changeImg() {
    document.rotater.src = images[i];

    if ( i < images.length - 1 ) {
        i++;
    } else {
        i = 0;
    }

    setTimeout( "changeImg()", time );
}

changeImg();
