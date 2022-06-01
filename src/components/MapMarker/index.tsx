import { MapMarkerProps } from '../../interfaces/props';

export function MapMarker({ revenueSpecial }: MapMarkerProps) {
  return (
    <>
      <img
        src={
          revenueSpecial ? '/images/marker-red.png' : '/images/marker-blue.png'
        }
        alt="Icon"
      />
    </>
  );
}
