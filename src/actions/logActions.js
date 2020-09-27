import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from './types';

export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const request = await fetch('/logs');
    const data = await request.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const request = await fetch('/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(log),
      });
      const data = await request.json();
      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`/logs/${id}`, {
        method: 'DELETE',
      });
      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setCurrentLog = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

export const clearCurrentLog = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const request = await fetch(`/logs/${log.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(log),
      });
      const data = await request.json();
      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      setLoading();
      const request = await fetch(`/logs?q=${text}`);
      const data = await request.json();
      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: LOGS_ERROR,
        payload: err.response.statusText,
      });
    }
  };
};

export const setLoading = () => {
  return {
    action: SET_LOADING,
  };
};
