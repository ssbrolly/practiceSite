let i = 0;
let time = 5000;


let images = document.querySelectorAll( '.rotater img');

function changeImg() {
    if ( i < images.length - 1 ) {
        i++;
    } else {
        i = 0;
    }
    
    showImage(i)
    
    setTimeout( changeImg, time );
}

function showImage( index ) {
    images.forEach( function( image, index ) {
        image.className = 'hide animate';
    });
    
    images[index].className = 'active animate';
}
changeImg();










