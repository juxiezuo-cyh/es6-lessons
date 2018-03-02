import { $ } from '../common/utils';// 重名名用as
import { fetchPost } from '../common/fetch';
export default (opts = {}) => {
  const $loginForm = $('login-from');
  const $loginBtn = $('login-btn');
  const $remember = $('login-remember');
  const $clearAccount = $('clear-account');
  const $clearPassword = $('clear-password');
  const $account = $('login-account');
  const $password = $('login-password');
  const $error = $('login-error');

  $loginForm.onsubmit = async () => {
    // 点击登录
    let remember = '0';
    if($remember.getAttribute('checked')) {
      remember = '1';
    }
    const data = await fetchPost('/login',{
      account : $account.value,
      password: $password.value,
      remember: remember
    });
    
  }
  $account.oninput = () => {
    
  }
  $password.oninput = () => {
    
  }
  $clearAccount.onclick = () => {

  }

}