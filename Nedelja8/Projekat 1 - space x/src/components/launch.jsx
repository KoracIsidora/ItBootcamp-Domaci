import React from 'react';
import { getSerbianDate } from '../utility/date-utility';

// Has attribute launch. ne treba state jer launch nece manjati vrednosti. 
const Launch = (props) => {
    let { launch } = props;
    let { mission_name: m_name,
        launch_date_utc: l_date,
        rocket: { rocket_name: r_name },
        links: { mission_patch: m_patch },
    } = launch;

    if (m_patch == null) {
        m_patch = 'https://www.muskimagazin.rs/image.php/muski-magazin-svemir-sateliti-space-x-elon-musk%20(8).jpg?width=600&image=https://www.muskimagazin.rs/chest/gallery/space-x-zeli-da-lansira-4000-satelita-u-orbitu/muski-magazin-svemir-sateliti-space-x-elon-musk%20(8).jpg';
    }
    let date = new Date(l_date);

    return (
        <div className="launch">
            <h4>{m_name}</h4>
            <label>{getSerbianDate(date)}</label>
            <label>{r_name}</label>
            <img src={m_patch} className="mission_logo" alt={m_name} />
        </div>
    );
}

export default Launch;