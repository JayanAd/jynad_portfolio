import { useEffect, useRef } from "react";

interface Node { x: number; y: number; vx: number; vy: number; r: number; }

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, nodes: Node[] = [];
    let mouse: { x: number; y: number } | null = null;
    let raf = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse = null; };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(60, Math.round((w * h) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 1.1,
      }));
    };
    window.addEventListener("resize", resize);
    resize();

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (mouse) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160 && d > 0.01) { n.vx += (dx / d) * 0.006; n.vy += (dy / d) * 0.006; }
        }
        const sp = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (sp > 0.6) { n.vx = (n.vx / sp) * 0.6; n.vy = (n.vy / sp) * 0.6; }
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      const maxDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const op = (1 - dist / maxDist) * 0.16;
            ctx.strokeStyle = `rgba(130,220,200,${op})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      if (mouse) {
        for (const n of nodes) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx.strokeStyle = `rgba(190,150,255,${(1 - d / 160) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(n.x, n.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(150,230,210,0.5)";
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6, pointerEvents: "none" }}
    />
  );
};
