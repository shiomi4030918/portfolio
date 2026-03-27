import React, { useEffect, useRef, useState } from "react";

function randomColors(count: number): string[] {
  return new Array(count).fill(0).map(() => {
    const num = Math.floor(Math.random() * 16777215);
    return "#" + num.toString(16).padStart(6, "0");
  });
}

/** マウス等の精密ポインタのみTubes（bodyのpointermove依存）。タッチ主体では挙動が崩れやすいのでCSS背景に切り替える */
function useInteractiveTubesEnabled() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return true;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    return !coarse && !reduce;
  });

  useEffect(() => {
    const update = () => {
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setEnabled(!coarse && !reduce);
    };

    update();

    const mqCoarse = window.matchMedia("(pointer: coarse)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqCoarse.addEventListener("change", update);
    mqReduce.addEventListener("change", update);
    return () => {
      mqCoarse.removeEventListener("change", update);
      mqReduce.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<any>(null);
  const interactiveTubes = useInteractiveTubesEnabled();

  useEffect(() => {
    if (!interactiveTubes) {
      appRef.current = null;
      return;
    }

    let cancelled = false;

    async function init() {
      if (!canvasRef.current) return;

      // threejs-components (Tubes cursor) をCDNから読み込み
      const url =
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

      try {
        // ViteにURLインポートを無視させる（CDNを実行時に解決）
        const mod: any = await import(/* @vite-ignore */ url);
        const TubesCursor = mod?.default ?? mod;
        if (cancelled) return;

        appRef.current = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ["#f967fb", "#53bc28", "#6958d5"],
            lights: {
              intensity: 200,
              colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"],
            },
          },
        });
      } catch (e) {
        // 型が無いCDNモジュールなので、失敗時はコンソールに出す
        // eslint-disable-next-line no-console
        console.error("Failed to init TubesCursor:", e);
      }
    }

    init();

    return () => {
      cancelled = true;
      const app = appRef.current;
      appRef.current = null;

      // destroy/dispose が用意されていれば解放
      try {
        if (app && typeof app.destroy === "function") app.destroy();
        else if (app && typeof app.dispose === "function") app.dispose();
      } catch {
        // ignore
      }
    };
  }, [interactiveTubes]);

  useEffect(() => {
    if (!interactiveTubes) return;

    const onClick = () => {
      const app = appRef.current;
      if (!app?.tubes) return;

      const colors = randomColors(3);
      const lightsColors = randomColors(4);
      app.tubes.setColors(colors);
      app.tubes.setLightsColors(lightsColors);
    };

    document.body.addEventListener("click", onClick);
    return () => document.body.removeEventListener("click", onClick);
  }, [interactiveTubes]);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      <div id="app">
        {interactiveTubes ? (
          <canvas id="canvas" ref={canvasRef} />
        ) : (
          <div className="hero-bg-fallback" aria-hidden />
        )}
        <div className="hero">
          <h1>Aki Shiomi</h1>
          <h2>Software Engineer</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.framer.com/@kevin-levron/"
          >
            portfolio
          </a>
        </div>
      </div>
    </section>
  );
}