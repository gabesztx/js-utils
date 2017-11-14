// import './text-component.scss'
import template from './text-component.html';

const addTextTemplate = () => {
  console.log('addtextTemplate');
  $('.content').append(template);
};

export default addTextTemplate;