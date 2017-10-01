import {
  Component,
  OnDestroy,
  AfterViewInit,
  ViewChild, 
  EventEmitter,
  Input,
  Output,
  NgZone
} from '@angular/core';

// import 'tinymce';
// import 'tinymce/themes/modern';
//
// import 'tinymce/plugins/table';
// import 'tinymce/plugins/link';

import { forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

// export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => WritingComponent),
//   multi: true
// };


@Component({
  selector: 'writing-component',
  template: `<textarea id="{{elementId}}"></textarea>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WritingComponent),
      multi: true
    }
  ]
})
export class WritingComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  @ViewChild('host') host:any;

  editor;

  constructor(private zone: NgZone) {}

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

        editor.on('init', () => {
          this.value && this.editor.setContent(this.value, {format: 'raw'});
        });
        editor.on('change', () => {
          this.onTouched();
          const content = editor.getContent();
          this.updateValue(content);
        });

      },
    });
  }


  _value = '';
  get value(): any { return this._value; }
  @Input() set value(v) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  updateValue(value: any) {
    this.zone.run(() => {
      this.value = value;
      this.onChange(value);
      this.onTouched();
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  /**
   * Implements ControlValueAccessor
   */
  writeValue(value: any) {
    this._value = value;
    value && this.editor && this.editor.hasVisual && this.editor.setContent(value);
  }
  onChange(_: any) {}
  onTouched() {}
  registerOnChange(fn: any) { this.onChange = fn; }
  registerOnTouched(fn: any) { this.onTouched = fn; }
}
