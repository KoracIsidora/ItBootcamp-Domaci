import React from 'react';

const InfoFooter = (props) => {
    let { info } = props;
    let { name: footer_name, orbit_type: footer_orbit, details: footer_details } = info;

    return (
        <div>
            <label>{footer_name}</label>
            <label>{footer_orbit}</label>
            <label>{footer_details}</label>
        </div>
    );
}

export default InfoFooter;