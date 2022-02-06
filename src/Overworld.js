class Overworld {
   constructor(config) {
       this.element = config.element;
       this.canvas = this.element.querySelector(".game-canvas");
       this.ctx = this.canvas.getContext("2d");
       this.map = null;
       this.ran = [];
       this.frame = 0;
 }

    startGameLoop(){
        const step = () => {

            this.map.drawLowerImage(this.ctx);

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                })
                object.sprite.draw(this.ctx);
            })
            

            this.frame += 1;
            if (this.frame === 100){
                this.frame = 0;
                this.ran.push(new RandomItem());

            console.log(this.ran.length);
            }
            for (let i=0; i<this.ran.length;i++){
                    this.ran[i].update(this.frame);
                    if (this.ran[i].y === 150){
                        this.ran.splice(i, 1)
                    }
                    this.ran[i].draw(this.ctx);

        }
        

            //this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(()=>{
                step();
            })
        }
        step();
    }

    init(){

        this.map = new OverworldMap(window.OverworldMaps.map1);
        
        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();


    }

}