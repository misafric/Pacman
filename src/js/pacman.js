

class pacMove {
    constructor(positionX, positionY) {
        this.positionX = positionX
        this.positionY = positionY
    }


    render() {
        const pacElm = document.createElement('div')
        pacElm.className = 'entity entity--pac pacboy-active-light'
        return pacElm
    }

    mount(parent) {
        this.element = this.render()
        parent.appendChild(this.element)
        this.update();
    }

    moving(direction) {
        if (direction === 'right') {
            this.positionX += 85
            this.element.style.backgroundPositionY = '340px'
        }
        if (direction === 'left') {
            this.positionX -= 85
            this.element.style.backgroundPositionY = '255px'
        }
        if (direction === 'up') {
            this.positionY -= 85
            this.element.style.backgroundPositionY = '85px'
        }
        if (direction === 'down') {
            this.positionY += 85
            this.element.style.backgroundPositionY = '170px'
        }
        this.element.style.left = this.positionX + 'px'
        this.element.style.top = this.positionY + 'px'
    }

    update() {
        
    }


}