import React, { Component } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Overlay from 'ol/Overlay';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Image from './loc.png'

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const { lat, lng, label, link } = this.props;

    if (!this.mapRef.current) return;

    const map = new Map({
      target: this.mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([lng, lat]),
        zoom: 16,
      }),
    });

    const vectorLayer = new VectorLayer({
      source: new VectorSource(),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: Image,
          scale: 0.18,
        }),
      }),
    });

    const feature = new Feature({
      geometry: new Point(fromLonLat([lng, lat])),
    });

    vectorLayer.getSource().addFeature(feature);

    const element = document.createElement('div');
    element.className = 'popup';

    const popup = new Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false,
    });

    map.addOverlay(popup);

    feature.on('click', (evt) => {
      const coordinate = evt.coordinate;
      element.innerHTML = `<p>${label}</p>`;
      popup.setPosition(coordinate);
      window.open(link, '_blank');
    });

    map.addLayer(vectorLayer);

    this.map = map;
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.setTarget(null);
    }
  }

  render() {
    return (
      <div>
        <div ref={this.mapRef} style={{ height: '300px' }}></div>
      </div>
    );
  }
}

export default MapComponent;
