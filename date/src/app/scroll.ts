const easings = {
  linear(t) {
    return t;
  },
  easeInQuad(t) {
    return t * t;
  },
  easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic(t) {
    return (--t) * t * t + 1;
  },
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
  },
  easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
  },
  easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint(t) {
    return 1 + (--t) * t * t * t * t;
  },
  easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
  }
};
export const scrollIt = (destination: any, scrollWrapper: any, duration = 200, easing = 'linear', callback?: any) => {
  const start = scrollWrapper.scrollTop;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  const documentHeight = scrollWrapper.scrollHeight;
  const scrollContentHeight = scrollWrapper.clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < scrollContentHeight ? documentHeight - scrollContentHeight : destinationOffset);
  if ('requestAnimationFrame' in window === false) {
    scrollWrapper.scrollTo(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }
  const scroll = () => {
    const scrollCont = document.querySelector('.dateContent');
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, ((now - startTime) / duration));
    const timeFunction = easings[easing](time);
    scrollCont.scrollTo(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
    if (scrollWrapper.scrollTop === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }
    requestAnimationFrame(scroll);
  };
  scroll();
};


