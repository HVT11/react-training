import axios from 'axios';

import { BASE_URL_API, STATUS_CODE } from '../utils/constants/api';
import { IFileImage } from '../interface/IFileImage';
import { IUser } from '../interface/IUser';

axios.defaults.baseURL = BASE_URL_API;

/**
 * @des Fetch data user from base URL
 * @returns {Promise}
 */
const fetchUsers = async (): Promise<IUser[] | null> => {
  try {
    const res = await axios.get('/users');
    if (res.status === STATUS_CODE.OK) {
      return res.data;
    } else {
      return null;
    }
  }
  catch (error) {
    alert('Fetch data user error!!!');
    throw(error);
  }
};

/**
 * @param {object} payload
 * @returns {Promise}
 */
const createUser = async (payload: Omit<IUser, 'id'>): Promise<Pick<IUser, 'id'>> => {
  try {
    const res = await axios.post('/users', payload);
    if (res.status === STATUS_CODE.OK) {
      console.log(res.data);
      return res.data;
    } else {
      return {id: -1};
    }
  }
  catch (error) {
    alert('Create a new user failed!!!');
    throw(error);
  }
};

/**
 * @param {number} id
 * @returns {Promise}
 */
const removeUser = async (id: number): Promise<Pick<IUser, 'id'>> => {
  try {
    const res = await axios.delete(`/users/${id}`);
    if (res.status === STATUS_CODE.OK) {
      return res.data;
    } else {
      return {id: -1};
    }
  } 
  catch (error) {
    alert('Delete failed!!!');
    throw(error);
  }
};

/**
 * @param {(string | number)} id
 * @param {Object} payload
 * @returns {Promise}
 */
const updateUser = async (
  id: string | number,
  payload: object,
): Promise<Pick<IUser, 'id'>> => {
  try {
    const res = await axios.put(`/users/${id}`, payload);
    if (res.status === STATUS_CODE.OK) {
      return res.data;
    } else {
      return {id: -1};
    }
  } 
  catch (error) {
    alert('Update failed!!!');
    throw(error);
  }
};

/**
 * @param {(string | number)} id
 * @param {Object} payload
 * @returns {Promise}
 */
const uploadAvatar = async (
  id: string | number,
  payload: object,
): Promise<IFileImage | null> => {
  try {
    const res = await axios.post(`/users/${id}/avatar`, payload);
    if (res.status === STATUS_CODE.OK) {
      console.log(res.data);
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    alert('Upload image failed!!!');
    throw(error);
  }
};

export { createUser, fetchUsers, removeUser, updateUser, uploadAvatar };
