import { useEffect, useRef } from 'react'
import styles from './BackgroundCanvas.module.css'

export default function BackgroundCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w, h, balls = []
    let mouse = { x: undefined, y: undefined }
    const rgb = [
      'rgb(26, 188, 156)',
      'rgba(15, 184, 184, 0.644)',
    ]

    function resizeReset() {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    function getRandomInt(min, max) {
      return Math.round(Math.random() * (max - min)) + min
    }

    function easeOutQuart(x) {
      return 1 - Math.pow(1 - x, 4)
    }

    class Ball {
      constructor() {
        this.start = {
          x: (mouse.x || w / 2) + getRandomInt(-20, 20),
          y: (mouse.y || h / 2) + getRandomInt(-20, 20),
          size: getRandomInt(10, 10)
        }
        this.end = {
          x: this.start.x + getRandomInt(-300, 300),
          y: this.start.y + getRandomInt(-300, 300)
        }
        this.x = this.start.x
        this.y = this.start.y
        this.size = this.start.size
        this.style = rgb[getRandomInt(0, rgb.length - 1)]
        this.time = 0
        this.ttl = 120
      }
      draw() {
        ctx.fillStyle = this.style
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
      update() {
        if (this.time <= this.ttl) {
          let progress = 1 - (this.ttl - this.time) / this.ttl
          this.size = this.start.size * (1 - easeOutQuart(progress))
          this.x = this.x + (this.end.x - this.x) * 0.01
          this.y = this.y + (this.end.y - this.y) * 0.01
        }
        this.time++
      }
    }

    function drawBalls() {
      for (let i = 0; i < balls.length; i++) {
        balls[i].update()
        balls[i].draw()
      }
    }

    function animationLoop() {
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      drawBalls()

      let temp = []
      for (let i = 0; i < balls.length; i++) {
        if (balls[i].time <= balls[i].ttl) temp.push(balls[i])
      }
      balls = temp

      requestAnimationFrame(animationLoop)
    }

    // throttle particle spawn and cap total balls to reduce density
    let lastSpawn = 0
    const SPAWN_INTERVAL = 20 // ms between spawn bursts
    const MAX_BALLS = 300

    function mousemove(e) {
      mouse.x = e.x
      mouse.y = e.y
      const now = performance.now()
      if (now - lastSpawn < SPAWN_INTERVAL) return
      lastSpawn = now
      // spawn 1 particle per burst, but never exceed MAX_BALLS
      if (balls.length < MAX_BALLS) {
        balls.push(new Ball())
      }
    }

    function mouseout() {
      mouse.x = undefined
      mouse.y = undefined
    }

    function init() {
      resizeReset()
      animationLoop()
    }

    window.addEventListener('resize', resizeReset)
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mouseout', mouseout)
    init()

    return () => {
      window.removeEventListener('resize', resizeReset)
      window.removeEventListener('mousemove', mousemove)
      window.removeEventListener('mouseout', mouseout)
    }
  }, [])

  return <canvas id="canvas" ref={ref} className={styles.canvas} />
}
