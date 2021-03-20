import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-aulas',
  templateUrl: './video-aulas.component.html',
  styleUrls: ['./video-aulas.component.css']
})
export class VideoAulasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

}
