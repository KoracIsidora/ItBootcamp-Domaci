import React, { useState, useEffect } from 'react';
import DataYearFilter from '../components/data-year-filter';
import LaunchList from './launch-list';
import {fillYearsToUpcomig} from '../utility/date-utility';
import {getUpcomingLaunches} from '../utility/space-x-service';

const UpcomigLList = (props) => {
    
    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState([]);

    useEffect(()=>{
        getUpcomingLaunches().then(data=>{
            setData(data);
            setDisplayData(data);
          })
    },[])

    const handleChange = (e) => {
        setDisplayData(data.filter(x => { return x.launch_year == e.target.value }));
    }

    return (
        <div className="uplist">
            <DataYearFilter handleChange={handleChange} fillYearsToArray={fillYearsToUpcomig}></DataYearFilter>
            <LaunchList data={displayData}></LaunchList>
        </div>
    );
}

export default UpcomigLList;


