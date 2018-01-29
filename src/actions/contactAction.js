//redux actions
import fetch from 'isomorphic-fetch'
import * as axios from 'axios'
 
export const ADD_RECORD = 'ADD_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const LOAD_RECORD = 'LOAD_RECORD';
export const DELETE_RECORD = 'DELETE_RECORD';


export function OnAddRecord(contact) {
    return { type: ADD_RECORD, payload: contact };
}

export function deleteRecord(contactId) {
    return { type: DELETE_RECORD, contactId };
}

export function OnUpdateRecord(contact) {
    return { type: UPDATE_RECORD, payload: contact };
}

export const onLoad = () => (
    dispatch => {
        return axios.get('hoursReport.json')
            .then(res => {
                dispatch({
                    type: LOAD_RECORD,
                    data: res.data.data
                })
            })
            .catch(err => {
                console.log("error");
            }
            )
    })