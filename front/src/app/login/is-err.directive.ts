import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector:"[is-err]"
})
export class IsErrDirective {
  @Input() private readonly isErr:boolean;
  constructor(private el:ElementRef) {

    this.isErr=false
    console.log(this.isErr)
    this.showAlert()
  }
  private showAlert(){
    this.el.nativeElement.class=this.isErr?"visible":"hidden"
  }
}

