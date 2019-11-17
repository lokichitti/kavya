import { Component, OnInit, ViewChild } from '@angular/core';


declare var google;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  @ViewChild("map", {static:false}) mapElement;
  map: any;
  constructor() { }

  ngOnInit() {
   // this.initMap();
  }
/*
  initMap(){
    let coords = new google.maps.LatLng(25,24);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)

      let marker: google.maps.Marker = new google.maps.Marker({
        map: this.map, position:coords
      })
  }*/
}
