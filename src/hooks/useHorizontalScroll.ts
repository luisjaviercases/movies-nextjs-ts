import { useRef, useEffect, RefObject } from 'react';

export function useHorizontalScroll(): RefObject<HTMLDivElement> {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;

    if (!el) return;

    let isMouseDown = false;
    let deactivateClick = true;
    let mouseDownTime = 0;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseClick = (e: MouseEvent) => {
      if (deactivateClick) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      mouseDownTime = Date.now();
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      const timeElapsed = Date.now() - mouseDownTime;
      if (timeElapsed < 300) {
        deactivateClick = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      e.stopPropagation();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    // If user do mouseleave from container (e.g mouseup outside)
    const handleMouseLeave = () => {
      if (isMouseDown) {
        isMouseDown = false;
      }
    };

    el.addEventListener('click', handleMouseClick);
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('click', handleMouseClick);
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elRef;
}
