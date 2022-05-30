import { useContext } from 'react';
import { StoresContext } from "../../providers/stores";
import GoogleMapReact from 'google-map-react';
import StorePoint from '../StorePoint/StorePoint';

const Map = () => {
    const { allStores, stores, selected, hovered } = useContext(StoresContext);

    const defaultProps = {
        center: {
            lat: -23.568767,
            lng: -46.649907
        },
        zoom: 12
    };

    if(stores.length > 0)
        return (
            <div className='Map' style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC6munUy9XhZ5Z5frB4YmnrNvatlZJBytw" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    {
                        allStores.map((store, index) => (
                            <StorePoint
                                key={index}
                                lat={store.latitude}
                                lng={store.longitude}
                                pointRevenue={store.revenue}
                                name={store.name}
                                selected={selected}
                                hovered={hovered}
                                address={{city: store.city, state: store.state}}
                            />
                        ))
                    }
                </GoogleMapReact>
            </div>
        );
    return (
        <div className='Map' style={{ display: 'flex', justifyContent: 'center', alignItens: 'center', marginTop: '80px' }}>
            Carregando
        </div>
    );
}
 
export default Map;