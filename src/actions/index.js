export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";

export const fetchDataPending = () => {
    return {
        type: FETCH_DATA_PENDING
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataError = (error) => {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}
