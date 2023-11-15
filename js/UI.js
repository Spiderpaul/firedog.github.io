export class UI{
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'creepster';
        this.image = document.getElementById('lives');
    }
    draw(context){
        context.save()
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'grey';
        context.shasowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAling = 'left';
        context.fillStyle = this.game.fontColor;
        //Puntaje
        context.fillText('Puntos: ' + this.game.score, 20, 50);
        //vidas
        for (let i = 0; i < this.game.lives; i++){
            context.drawImage(this.image, 20 * i + 20, 60, 25, 25);
        }
        //Tiempo
        context.textAlign = 'right';
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillStyle = 'white';
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(1), this.game.width - 20, 50);
        // Mensaje de game over
        if(this.game.gameOver){
            context.textAlign = 'center';
            context.fillStyle = 'orange';
            context.font = this.fontSize + 'px ' + this.fontFamily;
            context.fillText('GameOver', this.game.width * 0.5, this.game.height * 0.5 - 20);
            context.font = this.fontSize + 'px ' + this.fontFamily;
            context.fillText('Actualiza la página', this.game.width * 0.5, this.game.height * 0.5 + 10);
            context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
            /* if(this.game.score > 5){
                context.fillText('Intenta de nuevo', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('Presiona la tecla "Enter + movimiento" para destruir enemigos', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } else {
                context.fillText('Intenta de nuevo', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 0.7 + 'px ' + this.fontFamily;
                context.fillText('Avanza y destruye enemigos', this.game.width * 0.5, this.game.height * 0.5 + 20);
            } */
        }
        context.restore();
    }
}