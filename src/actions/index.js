const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const GET_TEACHERS = 'GET_TEACHERS';
const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

const setUser = user => ({
  type: SET_USER,
  user,
});

const userLogout = () => ({
  type: LOGOUT,
});

const getTeachers = teachers => ({
  type: GET_TEACHERS,
  teachers,
});

const addFlashMessage = message => ({
  type: ADD_FLASH_MESSAGE,
  message,
});

const deleteFlashMessage = message => ({
  type: DELETE_FLASH_MESSAGE,
  id: message.id,
});

export {
  setUser, userLogout, getTeachers, addFlashMessage, deleteFlashMessage,
  SET_USER, LOGOUT, GET_TEACHERS, ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE,
};
