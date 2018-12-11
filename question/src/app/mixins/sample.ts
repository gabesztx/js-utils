interface sameMethod {
  sameInit(): void
}

// Disposable Mixin
class Disposable {
  isDisposed: boolean;

  dispose() {
    this.isDisposed = true;
  }

}
export class SmartObject implements sameMethod {
  sameInit(){}
}
/*
// Activatable Mixin
class Activatable {
  isActive: boolean;

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }
}

export class SmartObject implements Disposable {
  constructor() {
    console.log('SmartObject');
  }
  isDisposed: boolean = false;
  dispose: () => void;
}
*/
