export default function Brick(level, bricks, canvas, brick) {
    
    brick.width = canvas.width / 5 - 12
    let newbricks = []
    if(!bricks) {
        return []
    }
    if (bricks.length >= 5 * level) {
        return
    }

    // // brick formation here
    for (let i = 0; i < 5 * level; i++) {
        let newBrick = new SingleBrick(
          brick.x + brick.width,
          brick.y,
          brick.width,
          brick.height,
          brick.colors
        );
        newbricks.push(newBrick);
        // newBrick.draw();
        brick.x += brick.width + 10;
        if (brick.x + brick.width >= canvas.width) {
          brick.x = 10;
          brick.y += brick.height + 8;
        }
      }
      return newbricks;
    }

class SingleBrick {
    constructor(x, y, w, h, c) {
        this.x = x - w
        this.y = y
        this.width = w
        this.height = h
        this.colors = c
        this.broke = false
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.broke ? "black" : "white"

        ctx.lineWidth = 5
        ctx.strokeStyle = this.broke ? "black" : "transparent"

        ctx.fill()
        ctx.strokeRect(this.x, this.y, this.width, this.height)
    }
}

// class SingleBrick {
//     constructor(x, y, w, h, c) {
//       this.x = x - w;
//       this.y = y;
//       this.width = w;
//       this.height = h;
//       this.colors = c;
//       this.broke = false;
//     }
//     draw(ctx) {
//       ctx.beginPath();
//       ctx.rect(this.x, this.y, this.width, this.height);
//       ctx.fillStyle = this.broke ? "rgba(19, 73, 89, 0)" : this.colors[1];
  
//       ctx.lineWidth = 5;
//       ctx.strokeStyle = this.broke ? "rgba(19, 73, 89, 0)" : "transparent";
    
//       ctx.fill();
//       ctx.strokeRect(this.x, this.y, this.width, this.height);
//     }
//   }