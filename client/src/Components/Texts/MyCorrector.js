const Corrector = (quill, options) =>{
this.quill = quill;
this.options = options;

var container = document.querySelector(options.container);
var _this = this;

quill.on('text-change', function() {
    var length = _this.calculate();
    container.innerText = length + ' ' + options.unit + 's';
});
};

Corrector.prototype.calculate = function() {
let text = this.quill.getText();
if (this.options.unit === 'word') {
    return text.split(/\s+/).length;
} else {
    return text.length;
}
};

Quill.register('modules/Corrector', Corrector);

var quill = new Quill('#editor', {
modules: {
    corrector: {
    container: '#text'
    }
}
});

var counter = quill.getModule('counter');

// We can now access calculate() directly
console.log(correcort.calculate(), 'words');


//   body {
//     padding: 25px;
//   }
  
//   #editor {
//     border: 1px solid #ccc;
//   }
  
//   #counter {
//     border: 1px solid #ccc;
//     border-width: 0px 1px 1px 1px;
//     color: #aaa;
//     padding: 5px 15px;
//     text-align: right;
//   }