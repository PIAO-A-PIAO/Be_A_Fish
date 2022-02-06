class RandomItem{
	constructor(){
		this.x = Math.random() * 300;
		this.y = 0;
		this.speed = 0.5;
		this.image = new Image();

	this.image.src = "assets/img/turtle.png";
		}
	update(){
		if (this.y === 200){
			return;
		}
		this.y += this.speed;

	}

	draw(ctx){
		ctx.fillStyle = "#fff";

		ctx.drawImage(this.image, 0, 0, 32, 32, this.x, this.y, 32, 32)
	}
}
	