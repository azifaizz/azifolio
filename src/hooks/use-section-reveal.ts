import { useEffect, useRef, useState } from "react";

type UseSectionRevealOptions = {
  threshold?: number;
  once?: boolean;
};

export const useSectionReveal = <T extends HTMLElement>({
  threshold = 0.1,
  once = true,
}: UseSectionRevealOptions = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  return { ref, isVisible };
};
