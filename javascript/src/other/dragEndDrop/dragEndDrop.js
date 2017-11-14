import 'hammerjs';
import template from './dragEndDrop.html';
import './dragEndDrop.scss';

const initHammer = ()=> {
  const dragElement = $('.dragElement');
  const mc = new Hammer.Manager(dragElement[0]);
  const pan = new Hammer.Pan({threshold: 0});
  mc.add(pan);

  let deltaX = 0;
  let swipeDirection = null;
  let overValue = 150;

  mc
    .on('panstart', (e)=> {
      swipeDirection = e.additionalEvent;
      dragElement.removeClass('animateActive');
    })
    .on('panmove', (e)=> {
      dragElement
        .css('transform', 'translate3d(' + (deltaX + e.deltaX) + 'px,0,0)')
        .css('-webkit-transform', 'translate3d(' + (deltaX + e.deltaX) + 'px,0,0)');
    })
    .on('panend', (e)=> {
      dragElement.addClass('animateActive');
      let stepValue = 0;
      if ($(e.target).width() / 2 < Math.abs((deltaX + e.deltaX))) {
        stepValue = swipeDirection === 'panleft' ? -overValue : overValue;
      }
      // console.log('panend',stepValue);
      dragElement
        .css('transform', 'translate3d(' + stepValue + '%,0,0)')
        .css('-webkit-transform', 'translate3d(' + stepValue + '%,0,0)');
      deltaX = stepValue;
    })
};

$(()=> {
  $('body').append(template);
  initHammer();
});



