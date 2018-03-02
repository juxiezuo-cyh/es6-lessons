import '../common/polyfill';
import render from './render';
import bindEvevt from './event';

const login = (opts = {}) => {
  // 默认值
  const defaultOpts = {
    loginBtnText: '登 录',
    accountPlaceholder: '手机号/邮箱/账号',
    passwordPlaceholder: '请填写密码',
    accountLabel: '',
    passwordLabel: ''
  };
  const options = Object.assign(defaultOpts, opts);
  //如果opts有内容，defaultOpts会被替换

  render(options);
  bindEvevt(options);
}
export { login }