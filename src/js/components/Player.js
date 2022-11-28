export default class Player {
    constructor(context, gravity) {
        this.position = {
            x: 100,
            y: 100,
        }

        this.velocity = {
            x: 0,
            y: 1,
        }

        this.keys = {
            right: {
                pressed: false,
            },
            left: {
                pressed: false,
            },
        }

        this.width = 100;
        this.height = 100;

        this.hp = 3;
        this.hws = 0;

        this.context = context;
        this.gravity = gravity;
    }

    draw() {
        this.context.fillRect(
            this.position.x, 
            this.position.y, 
            this.width,
            this.height
        )
    }

    update() {
        this.draw();

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= 
            this.context.canvas.height) {
                this.velocity.y += this.gravity;
            }
        else {
            this.velocity.y = 0;
        }    

    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.update();


        // this.goRight();
        // this.goLeft();

        // this.keys.left.pressed ? this.goLeft() : 
        // this.keys.right.pressed ? this.goRight() :
        // null

        if (this.keys.left.pressed) {
            this.velocity.x = -5
        }
        else if (this.keys.right.pressed) {
            this.velocity.x = 5
        }
        else this.velocity.x = 0
    }

    jump() {
        // ТУТ НЕОБХОДИМО ВТОРОЕ УСЛОВИЕ ДЛЯ ПРОВЕРКИ
        // ЧТО ПЛЕЕР УЖЕ НА ЗЕМЛЕ, ИНАЧЕ ПРИ ЗАЖАТИИ
        // ПРЫГАЕТ БЕСКОНЕЧНО :))
        if (this.velocity.y === 0){
            this.velocity.y -= 15;
        }
        
        
        //this.velocity.y -= 15;
    }

    goLeft() {
        this.velocity.x = this.keys.left.pressed ? -5 : 0;
    }

    goRight() {
        this.velocity.x = this.keys.right.pressed ? 5 : 0;
    }


}