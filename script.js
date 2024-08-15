
var modal = document.getElementById('modal');


var modalImg = document.getElementById('modal-img');
var captionText = document.getElementById('caption');
var galleryItems = document.getElementsByClassName('gallery-item');

for (var i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onclick = function(){
        modal.style.display = 'block';
        modalImg.src = this.children[0].src;
        captionText.innerHTML = this.children[0].alt;
    }
}

var span = document.getElementsByClassName('close')[0];

span.onclick = function() { 
    modal.style.display = 'none';
}
