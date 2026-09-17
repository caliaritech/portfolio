import { useEffect, useRef } from 'react'

type Vec = [number, number, number]

// Figuras wireframe que giran a los costados del hero (canvas 2D, sin librerías).
function torusKnot(p: number, q: number, steps: number): Vec[] {
  const pts: Vec[] = []
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const r = 0.55 + 0.25 * Math.cos(q * t)
    pts.push([r * Math.cos(p * t), r * Math.sin(p * t), 0.25 * Math.sin(q * t)])
  }
  return pts
}

function ring(radius: number, steps: number): Vec[] {
  const pts: Vec[] = []
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    pts.push([radius * Math.cos(t), 0, radius * Math.sin(t)])
  }
  return pts
}

function rotate([x, y, z]: Vec, ax: number, ay: number): Vec {
  const cy = Math.cos(ay), sy = Math.sin(ay)
  const x1 = x * cy + z * sy
  const z1 = -x * sy + z * cy
  const cx = Math.cos(ax), sx = Math.sin(ax)
  return [x1, y * cx - z1 * sx, y * sx + z1 * cx]
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const knot = torusKnot(2, 3, 260)
    const knotLayers = [0, 0.05, 0.1, 0.15]
    const rings = [ring(1, 90), ring(0.72, 90)]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const css = getComputedStyle(document.documentElement)
    const color = (name: string) => css.getPropertyValue(name).trim()
    const primary = color('--color-accent-2')
    const secondary = color('--color-accent')
    const detail = color('--color-accent-3')
    const tint = (c: string, pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`

    let raf = 0
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const stroke = (pts: Vec[], cx: number, cy: number, scale: number, ax: number, ay: number, color: string) => {
      ctx.beginPath()
      pts.forEach((p, i) => {
        const [x, y, z] = rotate(p, ax, ay)
        const f = 1 / (1.8 - z * 0.5)
        const px = cx + x * scale * f
        const py = cy + y * scale * f
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      })
      ctx.strokeStyle = color
      ctx.stroke()
    }

    const draw = (time: number) => {
      const t = time / 1000
      ctx.clearRect(0, 0, w, h)
      ctx.lineWidth = 1
      const size = Math.min(w * 0.2, 300)

      // Izquierda: nudo toroidal (color principal)
      const lx = w * 0.13
      const ly = h * 0.52
      knotLayers.forEach((off, i) => {
        stroke(knot, lx, ly, size * (1 + off), 0.9 + t * 0.15, t * 0.25 + off, tint(primary, 34 - i * 6))
      })

      // Derecha: esfera con órbitas y núcleo (secundario y detalle)
      const rx = w * 0.87
      const ry = h * 0.5
      const glow = ctx.createRadialGradient(rx, ry, 0, rx, ry, size * 0.6)
      glow.addColorStop(0, tint(secondary, 30))
      glow.addColorStop(1, 'transparent')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(rx, ry, size * 0.6, 0, Math.PI * 2)
      ctx.fill()

      stroke(rings[0], rx, ry, size * 1.05, 1.25, t * 0.3, tint(detail, 40))
      stroke(rings[1], rx, ry, size * 1.05, 1.2 + Math.sin(t * 0.4) * 0.15, -t * 0.4, tint(primary, 40))

      ctx.save()
      ctx.translate(rx, ry)
      ctx.rotate(t * 0.5)
      ctx.beginPath()
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2
        ctx.lineTo(Math.cos(a) * size * 0.14, Math.sin(a) * size * 0.14)
      }
      ctx.closePath()
      ctx.fillStyle = tint(detail, 80)
      ctx.fill()
      ctx.restore()

      if (!reduced) raf = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 hidden size-full lg:block" />
}
