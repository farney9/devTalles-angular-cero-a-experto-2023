import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.sass']
})
export class LazyImageComponent implements OnInit{

  @Input() url!: string;
  @Input() alt: string = '';

  hasLoaded:boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Url property is required');

  }

  onLoad() {
    console.log('Image Loaded!');

    setTimeout(()=> {
      this.hasLoaded = true;
    },1500)

  }

}
