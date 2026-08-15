'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import styles from './FinancialLitracy.module.css';

const ARTBOARD_WIDTH = 1440;
const ARTBOARD_HEIGHT = 4280;
const DESKTOP_MIN = 768;

export default function PageScaler({ children }: { children: ReactNode }) {
  const shellRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const shell = shellRef.current;
    const board = boardRef.current;
    if (!shell || !board) return;

    const applyScale = () => {
      const vw = document.documentElement.clientWidth || window.innerWidth;

      if (vw < DESKTOP_MIN) {
        board.style.width = '';
        board.style.transform = '';
        board.style.transformOrigin = '';
        shell.style.height = '';
        shell.style.justifyContent = '';
        shell.dataset.mode = 'fluid';
        return;
      }

      shell.dataset.mode = 'artboard';
      const scale = Math.min(1, vw / ARTBOARD_WIDTH);
      board.style.width = `${ARTBOARD_WIDTH}px`;
      board.style.transform = `scale(${scale})`;
      board.style.transformOrigin = 'top left';
      shell.style.height = `${ARTBOARD_HEIGHT * scale}px`;
      shell.style.justifyContent = scale < 1 ? 'flex-start' : 'center';
    };

    applyScale();
    window.addEventListener('resize', applyScale);
    window.addEventListener('orientationchange', applyScale);
    return () => {
      window.removeEventListener('resize', applyScale);
      window.removeEventListener('orientationchange', applyScale);
    };
  }, []);

  return (
    <div className={styles.pageScale} ref={shellRef}>
      <div className={styles.finatialLiteracy} ref={boardRef}>
        {children}
      </div>
    </div>
  );
}