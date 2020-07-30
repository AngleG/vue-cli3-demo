/**
 * @desc
 * @Author wxx
 * @Date 2020/07/28 14:52
 */
import { Message } from 'element-ui';

const toast = function (message, type = 'warning', showClose = false, duration = 4000) {
  Message({
    message,
    type,
    showClose,
    duration,
  });
};
export default toast;
