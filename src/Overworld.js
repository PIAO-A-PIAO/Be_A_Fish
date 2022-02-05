class Overworld{
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init(){
        const bg = new Image();
        bg.src = "assets/img/ocean.png";
        bg.onload = () =>{
            this.ctx.drawImage(bg, 0, 0)
        }

        const fish = new Image();
        fish.src = "assets/img/fish.png"
        fish.onload = () => {
            this.ctx.drawImage(fish, 0, 0, 64, 64, 0, 0, 64, 64);
        }
    }
}