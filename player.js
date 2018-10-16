class Player {
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;

    }

    drawPlayer() { // Draw the player (similar to colorRect)
        canvasContext.drawImage(imgs.player, 0, 60, 200, 200, this.x, this.y , this.w + 5, this.h + 15);
    }

    pFall() { // makes the player fall
        this.ySpeed += gravity;
        if (this.y > canvas.height) {
            gameOver = true;
        }
    }

    pMove() { // makes the player move (gravity and jumping)

        this.y += this.ySpeed;
    }

    pJump() { // makes the player jump
        if (jump && this.y > 0 + this.h) {
            this.ySpeed = jHeight;
            jump = false;
        }
    }

    updateYpos() { // Updates is position to be used in pipe.js
        ppY = this.y;
        ppW = this.w;
        ppH = this.h;
    }
    
    deathResetP(){ // Resets the player after death
        if(gameOver){
            this.ySpeed = 0;
            this.y = 0;
        }
    }
}
