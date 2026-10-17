type Cloud = {
  width: number
  height: number
  top: number
  left: number
  opacity: number
  duration: number
  delay: number
}

/**
 * Each "cloud" is a soft, puffy blob painted with stacked radial gradients
 * (white core fading into light blue) instead of a heavy `blur()` filter,
 * which keeps the animation cheap enough to run on mobile.
 *
 * `top`/`left` set a scattered *resting* position, so when `prefers-reduced-motion`
 * freezes the animation the clouds still form a calm, pleasing arrangement
 * instead of piling up in one corner. Negative `delay` values start each cloud
 * partway through its path so they are spread out immediately on first paint.
 */
const clouds: Cloud[] = [
  { width: 240, height: 150, top: 68, left: -6, opacity: 0.18, duration: 52, delay: -6 },
  { width: 170, height: 105, top: 40, left: 8, opacity: 0.12, duration: 44, delay: -20 },
  { width: 320, height: 190, top: 82, left: 22, opacity: 0.14, duration: 60, delay: -34 },
  { width: 190, height: 120, top: 18, left: 40, opacity: 0.1, duration: 48, delay: -12 },
  { width: 260, height: 155, top: 58, left: 58, opacity: 0.13, duration: 56, delay: -42 },
  { width: 210, height: 128, top: 32, left: 76, opacity: 0.16, duration: 50, delay: -26 },
]

const cloudPaint = [
  'radial-gradient(circle at 32% 62%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.15) 38%, transparent 62%)',
  'radial-gradient(circle at 62% 46%, rgba(125,211,252,0.65) 0%, rgba(125,211,252,0.12) 40%, transparent 64%)',
  'radial-gradient(circle at 82% 66%, rgba(14,165,233,0.45) 0%, rgba(14,165,233,0.08) 42%, transparent 66%)',
].join(', ')

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-lav-strong/25 blur-[120px]" />
      <div className="absolute right-4 bottom-4 h-64 w-64 rounded-full bg-lav/15 blur-[120px]" />

      {clouds.map((cloud, index) => (
        <div
          key={index}
          className="absolute rounded-[50%] animate-drift"
          style={{
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            width: cloud.width,
            height: cloud.height,
            opacity: cloud.opacity,
            background: cloudPaint,
            animationDuration: `${cloud.duration}s`,
            animationDelay: `${cloud.delay}s`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}
