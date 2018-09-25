        class Enemy{
        constructor(x,y,w,h,c,xSpeed,ySpeed){
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;
                this.c = c;
                this.xSpeed = xSpeed;
                this.ySpeed = ySpeed;
                this.makeE = true;
            }
            drawEnemy(){
                canvasContext.fillStyle = this.c;
                canvasContext.fillRect(this.x,this.y,this.w,this.h);
            }
            
            enemyMove(){
                this.y += this.ySpeed;
                this.x += this.xSpeed;
                if(this.x < 0){
                    delete enemies[i];
                }
            }
            
            newEnemy(){
                if(this.x < canvas.width / 2 && this.makeE){
                    makeEnemy();
                    this.makeE = false;
                }
            }
    }