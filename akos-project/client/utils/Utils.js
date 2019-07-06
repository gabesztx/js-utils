/**
 * Needed for prevent default events in the browser, in the event of drag and drop
 * @param {Object} event - Event type: any
 */
export function preventDefaultEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

/**
 * Open new browser window centered (hopefully)
 * @param {String} url - URL to be opened
 * @param {Number} width - width of the window
 * @param {Number} height - height of the window
 * @return {Window}
 */
export function openCenteredWindow(url, width = 800, height = 600) {
  if (!window || !window.screen) {
    throw new Error('No window object or screen data');
  }
  const pos = {
    x: window.screen.width / 2 - width / 2,
    y: window.screen.height / 2 - height / 2,
  };

  const features = `width=${width} height=${height} left=${pos.x} top=${pos.y}`;

  return window.open(url, '_blank', features);
}
