"use client";

import { useEffect } from 'react';

export default function MathRender({ targetId = 'article-content' }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.renderMathInElement) return;
    const el = document.getElementById(targetId);
    if (!el) return;
    try {
      window.renderMathInElement(el, {
        // delimiters: inline $...$ and \(...\), display $$...$$ and \[...\]
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true },
        ],
        throwOnError: false,
      });
    } catch (e) {
      // swallow errors; rendering is optional
      // eslint-disable-next-line no-console
      console.warn('KaTeX render error', e && e.message);
    }
  }, [targetId]);

  return null;
}
