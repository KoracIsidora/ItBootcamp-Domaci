import React from 'react';

const InfoDisplay = (props) => {
    let { info } = props;
    let { name:info_name, founder:info_founder, founded:info_founded, ceo:info_ceo } = info;

    return (
        <div>
            <h1>{info_name}</h1>
            <label>{info_founder}</label>
            <label>{info_founded}</label>
            <label>{info_ceo}</label>
        </div>
    )
}

export default InfoDisplay;
