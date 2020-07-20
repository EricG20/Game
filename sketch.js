let hover;
let ship
let state = 1
let yehaw = 0
function preload() {
hover = loadImage("images/hover.png")
ship = loadImage("images/ship.png")
}

function setup() {
    createCanvas(500,500)
    background(0)
    noStroke()
}
let room = 1
let hsp = 0
let vsp = 0
let xPos = 60
let yPos = 300
let canDash = 30

function draw() {
    fill(255,0,0)
    background(0,100)
    rectMode(CENTER)
    if (state == 1){
        rect(xPos,yPos,20-Math.abs(vsp)*.4 + Math.abs(hsp)*.5,20+Math.abs(vsp)*.4)
    }
    if (keyIsDown(LEFT_ARROW) && hsp > -5){
        hsp = -5
    }
    
    if (keyIsDown(RIGHT_ARROW) && hsp < 5){
        hsp = 5
    }
    
    if (keyIsDown(UP_ARROW)){
        if (vsp == 0) {
            vsp = -10
        }
        
        
    }
    if (keyIsDown(SHIFT) && canDash > 0){
        canDash = canDash -1
        hsp = hsp*1.2
        vsp = 0
        image(hover,xPos-10,yPos+10)
    }
    
    /*if (keyIsDown(DOWN_ARROW)){
        vsp += 2
        
    }*/
    if (state == 1){
        xPos = xPos +hsp
        yPos = yPos +vsp   
    }
    if (Math.abs(hsp) < 5.2 && vsp != 0){
        hsp = hsp*.7
    }
    if (vsp == 0){
        hsp = hsp*.7
    }
    
    vsp = vsp + .6
    rectMode(CORNER)
    if (room == 1){
        fill(255,255,255)
        rect(20,412,150,20)
        if (yPos >= 400+Math.sign(-vsp)&& yPos <420 &&xPos>= 25 && xPos<175){
            vsp = 0
            canDash = 30
        }
        rect(255, 380, 40,20)
        if (yPos >= 370+Math.sign(-vsp)&& yPos <400 && xPos>= 255 && xPos<295){
        vsp = 0
        canDash = 30
        }
        rect(340, 360, 60,20)
        if (yPos >= 350 + Math.sign(-vsp) && yPos < 380 && xPos >= 340 && xPos < 400){
        vsp = 0
        canDash = 30
        }
        rect(420, 295, 60, 20)
        if (yPos >= 285 + Math.sign(-vsp) && yPos < 315 && xPos >= 420 && xPos < 480){
            vsp = 0
            canDash = 30
            }
        rect(460, 220, 20, 20)
        if (yPos >= 210 + Math.sign(-vsp) && yPos < 230 && xPos >= 460 && xPos < 480){
            vsp = 0
            canDash = 30
            }
        rect(350, 180, 90, 20)
        if (yPos >= 170 + Math.sign(-vsp) && yPos < 190 && xPos >= 350 && xPos < 440){
            vsp = 0
            canDash = 30
            }
        rect(200, 120, 60, 20)
        if (yPos >= 110 + Math.sign(-vsp) && yPos < 130 && xPos >= 200 && xPos < 260){
            vsp = 0
            canDash = 30
            }
        floorblock(120, 70, 40, 20)    
        floorblock(20, 50, 40, 20)
        text("Get To the Space Ship!", 100, 300)
        text("Use the arrow keys to move!", 100, 320)
    }
    if (room == 2){
        fill(255,255,255)
        floorblock(25, 480, 50, 20)
        floorblock(95, 480, 50, 20)
        floorblock(180, 380, 40, 20)
        floorblock(420, 380, 60, 20)
        floorblock(480, 300, 40, 20)
        floorblock(190, 250, 60, 20)
        floorblock(110, 180, 40, 20)
        floorblock(420, 120, 40, 20)
        floorblock(460, 70, 40, 20)
        text("Press Shift to hover!", 100, 300)
    }
    if (room == 3){
        floorblock(460, 480+yehaw, 40, 20)
        floorblock(300, 440+yehaw, 90, 20)
        floorblock(100, 420+yehaw, 150, 20)
        floorblock(0, 380+yehaw, 80, 20)
        floorblock(200, 320+yehaw, 100, 20)
        text("Woah! There it is!", 100, 300+yehaw)
        image(ship, 236, 288)
    }
    if (yPos > 500 && room == 1){
    yPos = 400
    xPos = 60
    vsp = 0
    }
    if (yPos > 500 && room > 1){
        room = room - 1
        yPos = 0
    }
    if (yPos < 0&& xPos > 25 && xPos < 75 && room == 1){
        yPos = 479
        room = 2
    }
    if (yPos < 0 && room == 2){
        room = 3
        yPos = 479
    }
    if(yPos < 268 && yPos > 226 && xPos >236 && xPos < 268 && room == 3){
        state = 0
    }
    if (state == 0){
        yehaw = yehaw*1.1 + .1
    }
    if (yehaw > 50){
        fill(255)
        text("You WON!", 25, 25)
    }
}
function floorblock(x, y, w, l){
    rect(x, y, w, l)
    if (yPos >= y-10 + Math.sign(-vsp) && yPos < y-10+l && xPos >= x && xPos < x+w){
        vsp = 0
        canDash = 30
        }
    }        
