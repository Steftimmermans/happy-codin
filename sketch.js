let cursor = null;
let blusser = null;

let minimumShootHeight = 100;

let timer = 0;
let ramen = [];

function setup() {
    createCanvas(800, 400);

    gebouw = createSprite(399, 290, 750, 530);
    gebouw.shapeColor = color(255, 255, 0);


    for (let i = 0.5; i < 6; ++i) {
        let xPositie = width / 6;
        xPositie *= i;

        let ramenDerdeVerdiep = createSprite(xPositie, height - 330, 60, 60);
        ramenDerdeVerdiep.shapeColor = color(255,255,255);
        ramenDerdeVerdiep.draw = drawRamenDerdeVerdiep;
    }

    for (let i = 0.5; i < 6; ++i) {
        let xPositie = width / 6;
        xPositie *= i;

        let ramenTweedeVerdiep = createSprite(xPositie, height - 210, 60, 60);
        ramenTweedeVerdiep.shapeColor = color(255,255,255);
        ramenTweedeVerdiep.draw = drawRamenTweedeVerdiep;
    }

    for (let i = 0.5; i < 6; ++i) {
        let xPositie = width / 2;
        xPositie *= i;

        let ramenEersteVerdiep = createSprite(xPositie, height - 110, 170, 60);
        ramenEersteVerdiep.shapeColor = color(255,255,255);
        ramenEersteVerdiep.draw = drawRamenEersteVerdiep;
    }

    deur = createSprite(400, 340, 140, 200,);
    deur.shapeColor = color(138, 84, 59);

    blusserbasis = createSprite(width / 2, height - 70, 200, 70);
    blusserbasis.shapeColor = color(80, 80, 80);

    blusser = createSprite(width / 2, height - 100, 20, 70);
    blusser.shapeColor = color(80, 80, 80);
    blusser.draw = DrawBlusser;

    ground = createSprite(width / 2, height - 25, width, 50);
    ground.shapeColor = color(0, 120, 0);

    cursor = createSprite(100, 100, 30, 30);
    cursor.shapeColor = color(0, 8, 5);
    cursor["Move"] = MoveCursor;
    cursor["Show"] = ShowCursor;
    cursor.draw = DrawCursor;

}
function draw(){
    background(134, 207, 240);
    
    drawSprites();
}

function drawRamenDerdeVerdiep() {
    let clr = color(this.hitpoints * (255/3), this.hitpoints * (157/3), 0);
    fill(clr);
    rect(0, 0, this.width, this.height);
}
function drawRamenTweedeVerdiep() {
    let clr = color(this.hitpoints * (255/3), this.hitpoints * (157/3), 0);
    fill(clr);
    rect(0, 0, this.width, this.height);
}
function drawRamenEersteVerdiep() {
    let clr = color(this.hitpoints * (255/3), this.hitpoints * (157/3), 0);
    fill(clr);
    rect(0, 0, this.width, this.height);
}

function DrawBlusser() {
    fill(this.shapeColor);
    rect(0, 0, this.width, this.height);

    let direction = p5.Vector.sub(cursor.position, this.position);
    let angle = direction.heading();
    angle = degrees(angle) + 90;
    this.rotation = angle;
}

function ShowCursor() {
    stroke(this.shapeColor);
    strokeWeight(2);
    noFill();

    square(0, 0, this.width);
    line(10, 0, 19, 0);
    line(-10, 0, -19, 0);
    line(0, 10, 0, 19);
    line(0, -10, 0, -19);
}

function MoveCursor() {
    if (keyIsDown(LEFT_ARROW) === true ||
        keyIsDown(81) === true) {
            this.position.x = this.position.x - 10;
    }
    if (keyIsDown(RIGHT_ARROW) === true ||
        keyIsDown(68) === true) {
        this.position.x = this.position.x + 10;
    }
    if (keyIsDown(UP_ARROW) === true ||
        keyIsDown(90) === true) {
        this.position.y = this.position.y - 10;
    }
    if (keyIsDown(DOWN_ARROW) === true ||
    keyIsDown(83) === true) {
        this.position.y = this.position.y + 10;
    }
    if (this.position.x <= 0) {
        this.position.x = this.position.x + 10;
    }
    if (this.position.x >= width) {
        this.position.x = this.position.x - 10;
    }
    if (this.position.y <= 0) {
        this.position.y = this.position.y + 10;
    }
    if (this.position.y >= height - minimumShootHeight) {
        this.position.y = this.position.y - 10;
    }
}

function DrawCursor() {
    this.shootTimer = this.shootTimer + 1;

    this.Show();
    this.Move();
}