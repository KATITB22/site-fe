import { Variant } from 'framer-motion';

interface TransitionOptions {
  delay?: number;
  once?: boolean;
}

export function getTransition(
  from: 'left' | 'right' | 'bottom',
  options?: TransitionOptions
) {
  const initial: Variant = { opacity: 0 };
  if (from === 'bottom') {
    initial.y = '100%';
  } else {
    initial.x = from === 'left' ? '-100%' : '100%';
  }
  return {
    variants: {
      initial,
      view: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { delay: options?.delay ?? 0.2 },
      },
    },
    initial: 'initial',
    whileInView: 'view',
    viewport: { once: options?.once ?? false },
  };
}
