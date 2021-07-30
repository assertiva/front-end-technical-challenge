import React from 'react';
import GoogleMapReact from 'google-map-react';

import { Store } from '../../models/Store';
import Marker from '../Marker';

const GOOGLE_KEY = 'AIzaSyC6munUy9XhZ5Z5frB4YmnrNvatlZJBytw';

type GoogleMapOrientation = {
  lat: number;
  lng: number;
};

interface Props {
  items: Store[];
  initialPosition: GoogleMapOrientation;
  minimumRevenue: number;
}

export default function GoogleMap({
  items,
  initialPosition,
  minimumRevenue,
}: Props): JSX.Element {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_KEY }}
      center={{
        lat: initialPosition.lat,
        lng: initialPosition.lng,
      }}
      defaultZoom={12}
    >
      {items.map((store, index) => (
        <Marker
          key={String(index)}
          store={store}
          type={store?.revenue < minimumRevenue ? 'red' : 'blue'}
          lat={store?.latitude}
          lng={store?.longitude}
        />
      ))}
    </GoogleMapReact>
  );
}
