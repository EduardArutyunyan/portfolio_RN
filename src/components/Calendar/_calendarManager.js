export const weekdayCalc = (date) => {
    let day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    if(day === 0) {
        return 7;
    }

    return day;
}

export const lastDayCalc = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); 
    // month fix, because 'Date' starting count with 0
}


export const locales = {
    'ru': {
        monthNames: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],
        weekDaysNamesShort: [
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб',
            'Вс',
        ]
        
    },
    'en': {
        monthNames: [
            'January',
            'February',	
            'March',	
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',	
            'November',
            'December'
        ],
        weekDaysNamesShort: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ]
    },
}