var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.new_image.fromURL('BirthdayImage.jpg', function(Img) {
    block_image_objet = Img;

    block_image_objet.scaleToWidth(700);
    block_image_objet.scaleToHeighth(510);
    block_image_objet.set({
        top:0
        left:0
    });
    canvas.add(block_image_objet);
})	
	
}

function playSound(){
x.play();	
}
