import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';

import { Store } from '../../models/Store';

import markerBlue from '../../assets/images/marker-blue.png';
import markerRed from '../../assets/images/marker-red.png';
import { Container } from './styles';

type MarkerColor = 'blue' | 'red';

interface MarkerProps {
  store: Store;
  lat: number;
  lng: number;
  type: MarkerColor;
}

export default function Marker({ store, type }: MarkerProps): JSX.Element {
  const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLImageElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Container>
      <img
        src={type === 'blue' ? markerBlue : markerRed}
        alt={store.name}
        onClick={handleClick}
      />
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <span>{store.name}</span>
      </Popover>
    </Container>
  );
}
