import { useEffect, useRef } from 'react'

export default function AnimatedBg() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    if(!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const particleCount = window.matchMedia('(max-width: 768px)').matches ? 24 : 60
    const particles: {x:number,y:number, vx:number, vy:number, r:number, hue:number}[] = []
    for(let i=0;i<particleCount;i++){
      particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.6,vy:(Math.random()-0.5)*0.6,r:8+Math.random()*28,hue: Math.random()*360})
    }
    let raf = 0
    let shouldAnimate = !prefersReducedMotion

    function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }

    function onVisibilityChange() {
      shouldAnimate = !document.hidden && !prefersReducedMotion
      if (shouldAnimate && !raf) {
        raf = requestAnimationFrame(draw)
      }
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibilityChange)

    function draw(){
      if (!shouldAnimate) {
        raf = 0
        return
      }
      ctx.clearRect(0,0,w,h)
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy
        if(p.x< -50) p.x = w+50
        if(p.x> w+50) p.x = -50
        if(p.y< -50) p.y = h+50
        if(p.y> h+50) p.y = -50
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*3)
        g.addColorStop(0, `hsla(${p.hue},90%,65%,0.14)`)
        g.addColorStop(1, `hsla(${(p.hue+60)%360},80%,45%,0)`)
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x,p.y,p.r*2,0,Math.PI*2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    if (shouldAnimate) {
      raf = requestAnimationFrame(draw)
    }

    return ()=>{
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  },[])

  return <canvas ref={ref} style={{position:'fixed',left:0,top:0,zIndex:0,width:'100%',height:'100%',pointerEvents:'none'}} />
}
