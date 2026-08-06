"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function DeferredAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    let loaded = false;
    let timer: number | undefined;

    const loadAnalytics = () => {
      if (loaded) return;
      loaded = true;
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag("js", new Date());
      window.gtag("config", measurementId);

      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);
    };

    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "scroll", "touchstart"];
    events.forEach((event) => window.addEventListener(event, loadAnalytics, { once: true, passive: true }));
    timer = window.setTimeout(loadAnalytics, 10_000);

    return () => {
      if (timer) window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, loadAnalytics));
    };
  }, [measurementId]);

  return null;
}
