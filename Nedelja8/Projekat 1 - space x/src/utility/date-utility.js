export const getSerbianDate = (date) => {
    const options ={weekday: 'short', year:'numeric', month:'short', day:'numeric'};
    return date.toLocaleDateString('sr-SR', options);
}

export function fillYearsToArray(){
    let years = [];
    let dateNow = new Date();
    for(let i = 2000; i<=dateNow.getFullYear(); i++){
        years.push(i);
    }

    return years;
}

export function fillYearsToUpcomig(){
    let years = [];
    let dateNow = new Date();
    for(let i = dateNow.getFullYear(); i<=2030; i++){
        years.push(i);
    }

    return years;
}