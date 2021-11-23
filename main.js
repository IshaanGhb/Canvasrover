canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image1 = ["mars.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];
randomnumber=Math.floor(Math.random()*5);
background_image=background_image1[randomnumber];
rover_image="rover.png";
roverX=10;
roverY=10;
roverwidth=100;
roverheight=90;
function Load(){
    background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadRover;
rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,roverX,roverY,roverwidth,roverheight);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){console.log("up");up();}
    if(keypressed == '39'){console.log("right");right();}
    if(keypressed == '40'){console.log("down");down();}
    if(keypressed == '37'){console.log("left");left();}
}
function up() {
    if(roverY >=0){
        roverY=roverY-10;
        uploadRover();
        uploadBackground();
    }
}
function down() {
    if(roverY <=500){
        roverY=roverY+10;
        uploadRover();
        uploadBackground();
    }
}
function right() {
    if(roverX <=700){
        roverX=roverX+10;
        uploadRover();
        uploadBackground();
    }
}
function left() {
    if(roverX >=0){
        roverX=roverX-10;
        uploadRover();
        uploadBackground();
    }
}
