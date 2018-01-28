
import fetch from 'isomorphic-fetch'
import * as axios from 'axios'
// for schedule app 
export const ADD_RECORD = 'ADD_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';

export const LOAD_CONTACT = 'LOAD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const SEARCH_CONTACT = 'SEARCH_CONTACT';
export const REFRESH_CONTACT = 'REFRESH_CONTACT';
export const CHECK_CONTACT = 'CHECK_CONTACT';

export function OnCheckContact(date) {
    return { type: CHECK_CONTACT, payload: date };
}



export function OnAddContact(contact) {
    return { type: ADD_CONTACT, payload: contact };
}

export function deleteContact(contactId) {
    return { type: DELETE_CONTACT, contactId };
}

export function OnUpdateContact(contact) {
    return { type: UPDATE_CONTACT, payload: contact };
}
export function OnSearchContact(Value) {
    return { type: SEARCH_CONTACT, payload: Value };
}
export function OnRefreshContact() {
    return { type: REFRESH_CONTACT };
}
export const onLoad = () => (
    dispatch => {
        return axios.get('hoursReport.json')
            .then(res => {
                dispatch({
                    type: LOAD_CONTACT,
                    data: res.data.data
                })
            })
            .catch(err => {
                console.log("error");
            }
            )
    })