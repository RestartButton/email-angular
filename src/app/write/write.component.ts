import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit, AfterViewInit{
    @ViewChild('editor') editor!: ElementRef;

    constructor(){ }

    ngAfterViewInit(): void {
        
    }
    
    ngOnInit(): void {
        
    }

    format(tagName:string): void {
        this.editor.nativeElement.focus();
        const sel = window.getSelection();
        let range = sel?.getRangeAt(0);
        if(range && range.toString() != ''){
            let tag = document.createElement(tagName);
            range?.surroundContents(tag);
        }
    }

    send(): void {

    }

}
