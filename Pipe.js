class Pipe {
    constructor(x, y, bY, w, h, c, xSpeed, gap) {
        this.x = x;
        this.y = y;
        this.bY = bY;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.gap = gap;
    }
    
    drawPipe() { // Draws pipe  using images loaded in DKC4.html
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
        canvasContext.fillRect(this.x, this.bY, this.w, canvas.height - this.gap - this.y);
        
        canvasContext.drawImage(imgs.pipe, 0, 0, 201, 204, this.x - 6, this.y, this.w + 12, this.h + 6);
        
        canvasContext.drawImage(imgs.pipeb, 0, 0, 201, 204, this.x - 12, this.bY - 12, this.w + 24  , canvas.height - this.gap - this.y);
    }

    pipeMove() { // moves the pipe across the screen
        this.x += this.xSpeed;

        if (this.x < 0 - this.w) {
            pipes.pop();
            setUpPipe = true;
            for (i = 0; i < pipeTotal; i++) {
                makePipe();
            }
        }
    }

    pipeHit() { // detects when the player hits the pipe
        if (ppY < this.h && canvas.width / 3 + ppW > this.x && canvas.width / 3 < this.x + this.w || ppY + ppW > this.bY && canvas.width / 3 + ppW > this.x && canvas.width / 3 < this.x + this.w) {
            gameOver = true;
            this.c = 'red';
        } else {
            this.c = 'green';
        }
    }
    
    scoreAdd() { // increases the score when the player passes throught the pipe
        if (this.x + this.w > canvas.width / 3 && this.w + this.x < canvas.width / 3 + 3) {
            score = score + 1;
            console.log(score);
        }
    }

    pipeHeight() { // randomises the height of the top side of the pipe
        this.h = Math.floor((Math.random() * 200) + 150);
        this.bY = this.h + this.gap;
    }

}
