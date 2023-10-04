import React from 'react';

function addCommas(props) {
    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
    return (
        <div>
            {formatNumberWithCommas(props.number)}
        </div>
    );
}

module.exports = addCommas;