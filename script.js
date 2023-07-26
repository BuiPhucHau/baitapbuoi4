const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");


let fps = 60;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let eyeleft = {
    currentX: 190,
    currentY: 85,
    targerX: 190,
    targerY: 85,
  };

  let eyeright = {
    currentX: 210,
    currentY: 85,
    targerX: 210,
    targerY: 85,
  };

  document.addEventListener("mousemove", (eleft) => {
    eyeleft.targerX = eleft.clientX;
    eyeleft.targerY = eleft.clientY;
    console.log(eyeleft);
  });
  document.addEventListener("mousemove", (eright) => {
    eyeright.targerX = eright.clientX;
    eyeright.targerY = eright.clientY;
  });


    let eyeHeight = 80;
    let alpha = 0.1;
    let clickCount = 0;

    var imgdp = new Image();
    imgdp.src="denpin.png";
    
    var imgas = new Image();
    imgas.src="anhsang.png"    


    document.addEventListener("click", () => {
        const audio = document.getElementById("myAudio");
        audio.play();
        clickCount++;
        console.log(clickCount);

        // if (clickCount === 1){  
        //     ctx.drawImage(imgdp, 350,270,70,50);   
        // };
    
        // if (clickCount === 2) {
        //     ctx.drawImage(imgas, 420, 290, 80, 30); 
        // }

        // if (clickCount === 2) {
        //     clickCount = 0;
        // }
        
 
      });



function draw() {
    setInterval(()=>{
        delta = Date.now() - then;
        let fps = 1000 / delta;
        then = Date.now();
        alpha += 0.5;
        eyeHeight += Math.sin(alpha) * 10;

      ctx.beginPath();
      ctx.clearRect(0, 0, 400, 400);
      ctx.fillStyle = "black";
      ctx.font = "20px Georgia";
      ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 50);
//đầu
    ctx.beginPath();
    ctx.arc(200,120, 90, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
 //mặt  
    ctx.beginPath();
    ctx.arc(200,140, 70, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //mặt trái
    ctx.beginPath();
    ctx.arc(195, 137, 70, Math.PI/2, 1.5* Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //mặt phải
    ctx.beginPath();
    ctx.arc(205, 137, 70, Math.PI/2, 1.5* Math.PI,true);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

 //miệng dưới   
    ctx.beginPath();
    ctx.arc(200, 135, 40, 0,  Math.PI);
    ctx.fillStyle = "#9F1F31";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
// lưỡi
    ctx.beginPath();
    ctx.arc(200, 170, 20, Math.PI,  0);
    ctx.fillStyle = "#E35841";
    ctx.fill();
    ctx.stroke(); 

    ctx.moveTo(160, 135);
    ctx.lineTo(240.5, 135);
    ctx.stroke(); 

    ctx.beginPath();
    ctx.ellipse(200, 168, 19, 5, 0, 0, Math.PI);
    ctx.fillStyle = "#E35841";
    ctx.fill();
 
    
 //mắt trái   
    ctx.beginPath();
    ctx.arc(180, 80, 20, 0,  2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
   //mắt phải 
    ctx.beginPath();
    ctx.arc(220, 80, 20, 0,  2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //tròng trái
    ctx.beginPath();
    ctx.arc(eyeleft.currentX, eyeleft.currentY, 5, 0,  2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //tròng phải
    ctx.beginPath();
    ctx.arc(eyeright.currentX, eyeright.currentY, 5, 0,  2*Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    
    //mũi
    ctx.beginPath();
    ctx.arc(200, 107, 12, 0,  2*Math.PI);
    ctx.fillStyle = "#CE1613";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //lỗ mũi
    ctx.beginPath();
    ctx.arc(195, 103, 5, 0,  2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


//râu trái
ctx.beginPath();
ctx.moveTo(180, 110);
ctx.lineTo(145, 100);

ctx.moveTo(180, 115);
ctx.lineTo(145, 111);

ctx.moveTo(180, 120);
ctx.lineTo(145, 123);

ctx.stroke();

//râu phải
ctx.beginPath();
ctx.moveTo(220, 110);
ctx.lineTo(250, 100);

ctx.moveTo(220, 115);
ctx.lineTo(250, 111);

ctx.moveTo(220, 120);
ctx.lineTo(250, 123);

ctx.stroke();

 
//thân tay trái
    ctx.beginPath();
    ctx.ellipse(120, 220, 18, 38, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.stroke();  

//thân tay phải
    ctx.beginPath();
    ctx.ellipse(280, 220, 38, 18, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.stroke();  

// tay trái
ctx.beginPath();
ctx.arc(90, 250, 25, 0,  2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
ctx.closePath();



// tay phải
ctx.beginPath();
ctx.arc(310, 250, 25, 0,  2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
ctx.closePath();

if (clickCount === 1){  
    ctx.drawImage(imgdp, 350,270,70,50);   
};

if (clickCount === 2) {
ctx.drawImage(imgas, 420, 290, 80, 30); 
clickCount = 0;
}

 //thân
    ctx.beginPath();
    ctx.roundRect(125, 190, 150, 140, 25);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(130.5, 212.3, 13, 18, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.ellipse(128, 205.8, 10, 18, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(272.5, 214, 18, 13, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(269, 203, 13, 10, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#1E96D5";

    ctx.fill();
 
    ctx.closePath();
      
    
//nơ
    ctx.beginPath();
    ctx.roundRect(140, 185, 120, 15, 20);
    ctx.fillStyle = "#C40A0D";
    ctx.fill();
    ctx.st
    ctx.stroke();
    ctx.closePath();
 

//bụng
    ctx.beginPath();
    ctx.arc(200, 235, 58, -0.65, 1.2* Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
//chuông
    ctx.beginPath();
    ctx.arc(200, 205, 20, 0,  2*Math.PI);
    ctx.fillStyle = "#FBC343";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  //
    ctx.beginPath();
    ctx.moveTo(183, 195);
    ctx.lineTo(217, 195);

    ctx.moveTo(181, 202);
    ctx.lineTo(220, 202);

    ctx.moveTo(200, 215);
    ctx.lineTo(200, 224);
    ctx.stroke();
 // lỗ chuông
    ctx.beginPath();
    ctx.arc(200, 211, 6, 0,  2*Math.PI);
    ctx.fillStyle = "#987456";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

  

 

    //háng
    ctx.beginPath();
    ctx.moveTo(200, 305);
    ctx.lineTo(200, 330);

    ctx.moveTo(200, 305);
    ctx.lineTo(200, 330);

    ctx.moveTo(190, 305);
    ctx.lineTo(210, 305);
    ctx.stroke();

 // chân trái
    ctx.beginPath();
    ctx.roundRect(114, 315, 95, 35, 20);
     ctx.fillStyle = "white";
    ctx.fill();
    ctx.st
    ctx.stroke();
    ctx.closePath();
 
 //chân phải
    ctx.beginPath();
    ctx.roundRect(192, 315, 95, 35, 20);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.st
    ctx.stroke();
    ctx.closePath();
 
    
 //túi thần kì
    ctx.beginPath();
    ctx.roundRect(159, 235, 82, 12, 0);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.st
    ctx.stroke();
    ctx.closePath();
 
 
  //túi thần kì
    ctx.beginPath();
    ctx.arc(200, 240, 41, 0,  Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    


    if (eyeleft.currentX < eyeleft.targerX) {
        eyeleft.currentX += 1;
      } else if (eyeleft.currentX > eyeleft.targerX) {
        eyeleft.currentX -= 1;
      }

    if (eyeleft.currentX > 195) {
        eyeleft.currentX -= 1;
      }
    if (eyeleft.currentX < 170) {
        eyeleft.currentX += 1;
      }
    
    if (eyeleft.currentY < eyeleft.targerY) {
        eyeleft.currentY += 1;
      } else if (eyeleft.currentY > eyeleft.targerY) {
        eyeleft.currentY -= 1;
      }

    if (eyeleft.currentY > 90) {
        eyeleft.currentY -= 1;
      }
    if (eyeleft.currentY < 70) {
        eyeleft.currentY += 1;
      }
    


    if (eyeright.currentX < eyeright.targerX) {
        eyeright.currentX += 1;
      } else if (eyeright.currentX > eyeright.targerX) {
        eyeright.currentX -= 1;
      }

    
    if (eyeright.currentX > 230) {
        eyeright.currentX -= 1;
      }
    if (eyeright.currentX < 205) {
        eyeright.currentX += 1;
      }
    
    if (eyeright.currentY < eyeright.targerY) {
        eyeright.currentY += 1;
      } else if (eyeright.currentY > eyeright.targerY) {
        eyeright.currentY -= 1;
      }

      
    if (eyeright.currentY > 90) {
        eyeright.currentY -= 1;
      }
    if (eyeright.currentY < 70) {
        eyeright.currentY += 1;
      }

}, fpsInterval);
}
draw();