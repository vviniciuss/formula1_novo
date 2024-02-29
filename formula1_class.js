class Objeto {
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenha_Objeto() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
}

class Carro extends Objeto {
    dirX = 0
    dirY = 0
    pontuacao = 0
    vida = 3

    desenhaCarro(){

    // roda dianteira direita
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x+40,this.y-60,10,10)
    des.closePath()
    des.stroke()
    des.fill()

    // roda dianteira esquerda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x,this.y-60,10,10)
    des.closePath()
    des.stroke()
    des.fill()

    // roda traseira direita
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x+40,this.y-20,10,10)
    des.closePath()
    des.stroke()
    des.fill()

    // roda traseira esquerda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = "black"
    des.rect(this.x,this.y-20,10,10)
    des.closePath()
    des.stroke()
    des.fill()

    // trapezio do carro
    des.beginPath()
    des.moveTo(this.x,this.y)  
    des.lineTo(this.x+50,this.y)
    des.lineTo(this.x+40,this.y-50)
    des.lineTo(this.x+10,this.y-50)
    des.closePath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = this.a
    des.stroke()
    des.fill()

    // desenhando corpo frente em um retangulo
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = this.a
    des.rect(this.x+10,this.y-70,30,20) 
    des.closePath()
    des.stroke()
    des.fill()

    // desenhando asa frente em um retangulo sobrescrevendo a borda
    des.beginPath()
    des.lineWidth = '5'
    des.strokeStyle="black"
    des.fillStyle = this.a
    des.rect(this.x,this.y-80,50,10)
    des.closePath()
    des.stroke()
    des.fill()
    }

    atualizaCarro(){
        this.x += this.dirX
        this.y += this.dirY

        if (this.x <= 30) {
            this.x = 30
        }
        else if (this.x >= 420) {
            this.x = 420
        }
        if (this.y <= 70) {
            this.y = 70
        } else if (this.y >= 590) {
            this.y = 590
        }

    }

    point(objeto) {
        if(this.y > objeto.y) {
            return true
        }
        else {
            return false
        }
    }

    colid(objeto) {
        if ((this.x < objeto.x + objeto.w)&&(this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&(this.y + this.h > objeto.y)){
            return true
        }

    }
}

class Carro02 extends Carro { 
    atualizaCarro02() {
        this.y += 3
        if (this.y >= 700) {
            this.y -= 800
            this.x = Math.floor(Math.random() * (416 - 20 + 1) + 20)
        }
    }

    recomeca() {
        this.y = +700
    }
}


class Estrada extends Objeto {
    desenhaEstrada() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }

    moveEstrada() {
        this.y += 10
        if (this.y >= 790) {
            this.y = -100
        }
    }
}

class Text {
    desenhaTexto (text, x, y, cor, font) {
       des.fillStyle = cor
       des.lineWidth = '5'
       des.font = font
       des.fillText(text, x, y) 
    }
}