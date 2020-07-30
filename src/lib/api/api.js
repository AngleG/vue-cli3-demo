/**
 * @Author wxx
 * @Date 2020/7/28 11:24
 */
import httpRequest from './http-request';

const webApi = {
  getRoles() {
    return httpRequest('/roles', {}, { method: 'get' });
  },
  getStaffList() {
    return httpRequest('/staff', {}, { method: 'get' });
  },
};

export default webApi;
