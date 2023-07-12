import { Component, OnInit } from '@angular/core';
import { IBox, IMapOptions, MarkerTypeId,IMarkerIconInfo, } from "angular-maps";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: true,
    disableStreetside: true,
    navigationBarMode: 0, 
    zoom: 6,
    mapTypeId:7,
    showMapTypeSelector: false,
  };
  
  _box: IBox = {
    maxLatitude: -34,
    maxLongitude: 142,
    minLatitude: -36,
    minLongitude: 135,
    center:{latitude: -32,longitude: 138}
  };
  
  _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 48,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'    
  };
            // for all available options for the various components, see IInfoWindowOptions, IInfoWindowAction, IMarkerOptions, IMapOptions, IMarkerIconInfo

  constructor() { }

  ngOnInit() {
  }

}
