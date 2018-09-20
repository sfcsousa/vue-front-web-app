"use strict";

let storeConfig = {
    state : {
        user: {
            image: '',
            name : 'Suga 93',
            login: '', 
            id: 0,
        }
    },
    getters : {
        user : (state) => {
            return state.user;
        }

    }
}