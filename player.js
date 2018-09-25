class Player{
    constructor(x,y,w,h,c,ySpeed){
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.c = c;
            this.ySpeed = ySpeed;
                
        }
     drawPlayer(){ // Draw the player (similar to colorRect)
            canvasContext.fillStyle = this.c;
            canvasContext.fillRect(this.x,this.y,this.w,this.h);
        }
            
     pMove(){
            this.ySpeed += gravity;
         
        }
           
     playerMove(){
            this.y += this.ySpeed;

        }
           
     pJump(){
            if(jump && this.y > 0 + this.h){
                this.ySpeed = jHeight;
                 console.log(jump)
                jump = false;
            }
        }
}
