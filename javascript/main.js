let i = 0;
let time = 5000;


let rotater = document.querySelector( '.rotater' );
let images = document.querySelectorAll( '.rotater img');

function changeImg() {
    if ( i < images.length - 1 ) {
        i++;
    } else {
        i = 0;
    }
    
    showImage(i)
    
    setTimeout( "changeImg()", time );
}

function showImage( index ) {
    images.forEach( function( image, index ) {
        image.className = 'hide animate';
    });
    
    images[index].className = 'active animate';
}




changeImg();




// var array = [ "one", "two", "three", "four", "five", "six", "seven", "eight" ];
// console.log(array);
// array[2] = 10;
// // array.splice( 2, 1, 10 );
// console.log(array);






