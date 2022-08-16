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
  const res = await axios.get('/users');

  if (res.status === STATUS_CODE.OK) {
    return res.data;
  }

  return null;
};

/**
 * @param {object} payload
 * @returns {Promise}
 */
const createUser = async (payload: Omit<IUser, 'id'>): Promise<{id: number} | null> => {
  const res = await axios.post('/users', payload);

  if (res.status === STATUS_CODE.OK) {
    return res.data;
  }

  return null;
};

/**
 * @param {number} id
 * @returns {Promise}
 */
const removeUser = async (id: number): Promise<{id: number} | null> => {
  const res = await axios.delete(`/users/${id}`);

  if (res.status === STATUS_CODE.OK) {
    return res.data;
  }

  return null;
};

/**
 * @param {(string | number)} id
 * @param {Object} payload
 * @returns {Promise}
 */
const updateUser = async ( id: string | number, payload: object ): Promise<{id: number} | null> => {
  const res = await axios.put(`/users/${id}`, payload);

  if (res.status === STATUS_CODE.OK) {
    return res.data;
  }

  return null;
};

/**
 * @param {(string | number)} id
 * @param {Object} payload
 * @returns {Promise}
 */
const uploadAvatar = async ( id: string | number, payload: object ): Promise<IFileImage | null> => {
  const res = await axios.post(`/users/${id}/avatar`, payload);

  if (res.status === STATUS_CODE.OK) {
    return res.data;
  }

  return null;
};

export { createUser, fetchUsers, removeUser, updateUser, uploadAvatar };
