export class CustomizedComponent extends HTMLDivElement {
  constructor() {
    super();
    this.innerText = 'Custom Div element';
  }

  /*  connectedCallback() {
      console.log('Custom connected!');
      setTimeout(
        () => {
          this.setAttribute('class', 'szöveges');
          console.log('trigger');
        }, 2000
      );
    }

    attributeChangedCallback(name, oldVal, newVal) {
      console.log('Custom attributeChangedCallb');
    }

    setInnerText(srt) {
      console.log('setInnerText', srt);
      // this.innerText = srt;
    }*/
}

