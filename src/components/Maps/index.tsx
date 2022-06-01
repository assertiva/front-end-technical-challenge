import GoogleMapReact from 'google-map-react';
import { useStores } from '../hooks/useStores';
import { MapMarker } from '../MapMarker';

function AnyReactComponent({ text }: any) {
  return <div>{text}</div>;
}

export function Maps() {
  const { stores } = useStores();

  const defaultProps = {
    center: {
      lat: -23.568767,
      lng: -46.649907,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '50vh', width: '86%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC6munUy9XhZ5Z5frB4YmnrNvatlZJBytw' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {stores.map((store: any, index: any) => (
          <MapMarker
            key={index}
            // @ts-ignore
            lat={store.latitude}
            lng={store.longitude}
            revenueSpecial={store.revenue < 15000}
            name={store.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}
