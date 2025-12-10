import React, { useRef, useEffect } from 'react'

export default function AnimatedBg(){
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(()=>{
    const canvas = ref.current!
    if(!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    const particles: {x:number,y:number, vx:number, vy:number, r:number, hue:number}[] = []
    for(let i=0;i<60;i++){
      particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.6,vy:(Math.random()-0.5)*0.6,r:8+Math.random()*28,hue: Math.random()*360})
    }
    let raf = 0
    function resize(){ w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight }
    window.addEventListener('resize', resize)
    function draw(){
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
    raf = requestAnimationFrame(draw)
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  },[])

  return <canvas ref={ref} style={{position:'fixed',left:0,top:0,zIndex:0,width:'100%',height:'100%',pointerEvents:'none'}} />
}
