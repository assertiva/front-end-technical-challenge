import { useContext } from 'react';
import { StoresContext } from "../../providers/stores";
import styled from 'styled-components';

const StorePointStyled = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    border: 1px solid #000;
    background-color: #b9b9b9;
    z-index: 100000;
    transition: .1s all ease-in-out;

    &.negative {
        background-color: red;
    }

    &.selected {
        background-color: green!important;
        z-index: 10000000000000;
        position: absolute;

        .StorePoint-info {
            display: flex;
        }
    }

    &.hovered {
        z-index: 10000000000000;
        position: absolute;
        transform: scale(1.2);
    }

    .StorePoint-info {
        display: none;
        position: absolute;
        top: 18px;
        padding: 10px;
        background-color: #eeff62;
        border-radius: 3px;
        font-size: 1.4em;
        flex-direction: column;
        width: 150px;

        .StorePoint-name {
            display: block;
            font-weight: 800;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid;
        }
    }
`;

const StorePoint = ({ name, pointRevenue, selected, hovered, address }) => {
    const { revenue } = useContext(StoresContext);

    const classes = {
        negative: pointRevenue < parseFloat(revenue.replace('.', '').replace(',', '.')).toFixed(2) ? 'negative' : '',
        selected: name == selected ? 'selected' : '',
        hovered: name == hovered ? 'hovered' : ''
    }

    return (
        <StorePointStyled
            className={`${classes.negative} ${classes.selected} ${classes.hovered}`}
        >
            <div className='StorePoint-info'>
                <span className='StorePoint-name'>{name}</span>
                <span className='StorePoint-address'>
                    Rua {name}, {address.city}    - {address.state}
                </span>
            </div>
        </StorePointStyled>
    );
}
 
export default StorePoint;