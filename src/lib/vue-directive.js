/**
 * @Author wxx
 * @Date 2020/7/31 17:52
 */
import Vue from 'vue';

Vue.directive('preventRepeatClick', {
  // 当被绑定的元素插入到DOM中时...
  inserted(el, binding) {
    const ele = el;
    ele.addEventListener('click', () => {
      if (!ele.disabled) {
        ele.disabled = true;
        setTimeout(() => {
          ele.disabled = false;
        }, binding.value || 600);
      }
    });
  },
});
