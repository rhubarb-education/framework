import Cookies from 'js-cookie';
import api from './api';

export const actions = {
    nextSlide: 'NEXT_SLIDE',
    completeModule: 'COMPLETE_MODULE',
    finalSlide: 'FINAL_SLIDE',
};

const getId = () => {
    if (!Cookies.get('bfg_id')) {
        Cookies.set('bfg_id', generateId());
    }

    return Cookies.get('bfg_id');
};

var generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 12);
};

export const sendAnalytics = (mid: string, data: object) => {
    api.post('debug', {
        mid: mid,
        identifier: getId(),
        data: {
            ...data,
            env: process.env.NODE_ENV,
        },
    })
        .then(() => {
            console.log('Analytics sent successfully.');
        })
        .catch((error) => {
            console.log('Error sending analytics', error);
        });
};
