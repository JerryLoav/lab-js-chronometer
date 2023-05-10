class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    Chronometer.intervalId= setInterval(() =>
      {
        if(printTimeCallback){
          return printTimeCallback()
        }
        this.currentTime++
      }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutos = 0
    if(this.currentTime===0){
      return 0
    }
    if(this.currentTime % 60 === 0){
      minutos++
      return minutos
    }else{
      return minutos = Math.floor(this.currentTime/60)
    }
  }

  getSeconds() {
    // ... your code goes here
    let segundos = 0
    if(this.currentTime===0){
      return 0
    }
    if(this.currentTime<60){
      return this.currentTime
    }else
    {
      return this.currentTime % 60
    }
   
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let digitosATexto= ""
    if(value===0){
      return "00"
    }
    if(value<10){
      digitosATexto = "0" + value.toString()
      return digitosATexto
    }else{
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(Chronometer.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
  }
}
