class Pipe{
    constructor(x,y,bY,w,h,c,xSpeed,gap){
        this.x = x;
        this.y = y;
        this.bY = bY;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
        this.gap = gap;
    }

    drawPipe(){
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x,this.y,this.w,this.h);
        canvasContext.fillRect(this.x,this.bY,this.w,canvas.height - this.gap - this.y);
    }
    
    pipeMove(){
        this.x += this.xSpeed;
        if(this.x < 0 - this.w){
            this.x = canvas.width;
            this.h = Math.floor((Math.random() * 200) + 150);
            this.bY = this.h + this.gap;
        }
    }

    pipeHit(){
        if (ppY < this.h && canvas.width / 3 + ppW > this.x && canvas.width / 3 < this.x + this.w|| ppY + ppW> this.bY && canvas.width / 3 + ppW > this.x && canvas.width / 3 < this.x + this.w){
                gameOver = true;
                this.c = 'red';
        } else{
            this.c = 'green';
        }
    }
}