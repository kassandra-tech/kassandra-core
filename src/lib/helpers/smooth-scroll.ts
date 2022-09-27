const isSmoothScrollSupported: () => boolean = () => {
  return 'scrollBehavior' in document.documentElement.style;
};

export interface Options {
  scrollBox?: string | Element; // id of element or element
  offsetTop?: number;
}

export const scrollTo = (target: Element, options?: Options): void => {
  let scrollBox: Window | Element | null = window;

  if (options?.scrollBox) {
    if (typeof options.scrollBox === 'string' && options.scrollBox) {
      scrollBox = document.getElementById(options.scrollBox);
    } else if (options.scrollBox instanceof Element) {
      scrollBox = options.scrollBox;
    }
  }

  if (!scrollBox) {
    return;
  }

  const offsetTop = options?.offsetTop || 0;
  const from = (scrollBox as Element).getBoundingClientRect ?
    (scrollBox as Element).getBoundingClientRect().top :
    (scrollBox as Window).pageXOffset;
  const to = target.getBoundingClientRect().top;

  if (isSmoothScrollSupported()) {
    scrollBox.scrollBy({top: to - from + offsetTop, behavior: 'smooth'});
  } else {
    const duration = 300;
    const startTime = performance.now();
    const scrollTop = scrollBox === window ? window.pageXOffset : (scrollBox as Element).scrollTop;
    const frame = () => {
      const frameTime = performance.now();
      let progress = (frameTime - startTime) / duration;

      if (progress > 1) {
        progress = 1;
      }

      const top = scrollTop + (to - from + offsetTop) * progress;

      if (scrollBox) {
        if (scrollBox.scrollTo) {
          scrollBox.scrollTo(0, top);
        } else {
          (scrollBox as HTMLElement).scrollTop = top;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }
};
