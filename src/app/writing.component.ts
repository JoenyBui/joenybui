import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

// import 'tinymce';
// import 'tinymce/themes/modern';
//
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/link';

@Component({
  selector: 'writing-component',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class WritingComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      menubar: ['view', 'insert'],
      // toolbar: ['image'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
