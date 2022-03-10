var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
 path = createSprite(200,200);
 path.addImage("path.png",pathImg);
 path.velocityX = -4;
 path.scale = 1.2;
 path.rotation = 90




//Criando menino que corre 
 boy = createSprite(60,315,30,30)
 boy.addAnimation("Runner-1.png","Runner-2.png",boyImg)
 boy.scale = 0.10
 boy.rotation = 90



// Criando Boundary (Limite) esquerdo  
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(0,0,300,0);
 rightBoundary.visible = false;
}


function draw() {
    background(0);
    path.velocityX = -4;

 // Menino se movendo no eixo X com o mouse
    boy.y = World.mouseY

    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(rightBoundary);
    boy.collide(leftBoundary);





 //Reiniciar o fundo
    if(path.x < 0){
    path.x = path.width/2;
    }
 



    drawSprites();

 }




