
export class Counter {
constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.quill.getText(this));
      // Account for initial contents
}

calculate() {
    let text = this.quill.getText();
    console.log(text)
    
}

}

