 export default function ship(length=3){
        this.length = length
        this.hits = 0
        this.isSunk = false
        this.hit = hit

    function hit(){
        if(this.isSunk) return
        this.hits++
        if(this.hits == this.length) this.isSunk = true
    }

    return this
}

