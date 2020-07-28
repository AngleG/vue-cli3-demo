/**
 * Created by admin on 2020/7/27
 */
import axios from 'axios';

const LOCAL_MOCK_URL = '/mock/5f1e890d67b7b33927fe2ac9/demo/';

// 402： Unprocessable Entity (请求格式正确，但是由于含有语义错误，无法响应)
const errorCodeList = [401, 422];

const requestSuccess = (res) => {
  const { data, status } = res;
  console.log(status, '-=status');
  let result = {
    flags: null,
    status: null,
    data: null,
    message: null,
  };
  if (data && (status === 200 || status === 404)) {
    result = {
      flags: 'success',
      status,
      data,
      message: '成功',
    };
  } else if (data && status === 400) {
    result = {
      flags: 'fail',
      status,
      message: '接口返回的错误信息',
    };
  } else if (data && status === 900) {
    result = {
      flags: 'fail',
      status,
      message: '服务器超时！',
    };
  } else {
    result = {
      flags: 'fail',
      status,
      message: '接口返回的错误信息',
    };
  }
  return result;
};

const requestError = (err) => {
  const { response } = err;
  const { status } = response;
  if (!response || !errorCodeList.includes(status)) {
    return {
      flags: 'fail',
      status,
      message: '网络错误',
    };
  }
  const message = status === 401 ? '无权访问' : response.data.message;
  return {
    flags: 'fail',
    status,
    message,
  };
};

const httpRequest = function (url, data = {}, options = { method: 'get' }, params) {
  return axios(
    {
      baseURL: `https://easy-mock.com${LOCAL_MOCK_URL}`,
      url,
      data,
      params,
      timeout: 5000,
      ...options,
    },
  )
    .then((res) => requestSuccess(res))
    .catch((err) => requestError(err));
};

export default httpRequest;
