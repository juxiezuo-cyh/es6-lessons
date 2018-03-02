import { getId } from '../common/utils'
const template = (opts = {}) => {
  const autocompleteTpl = `
    <div id="no-autocomplete">
      <input type="text">
      <input type="password">
    </div>
  `
  const autocompleteAdaper = opts.autocomplete ? '' : autocompleteTpl;
  const autocompleteValue = opts.autocomplete ? 'on' : 'off';
  const tpl = `
    <div id="login-wrapper">
      <form id="login-form" onsubmit="return false">
        ${autocompleteAdaper}
        <label class="login-account-wrapper">
          <span class="account-label">${opts.accountLabel}</span>
          <input id="login-account"
            name="account" type="text"
            autocomplete="${autocompleteValue}"
            placeholder="${opts.accountPlaceholder}">
          <span id="clear-account" class="del"></span>
        </label>
        <label class="login-account-wrapper">
          <span class="account-label">${opts.passwordLabel}</span>
          <input id="login-password"
            name="password" type="password" 
            autocomplete="${autocompleteValue}"
            placeholder="${opts.passwordPlaceholder}">
        </label>
        <input id="login-btn" class="login-btn" 
          type="submit" value="${opts.loginBtnText}">
      </form>
    </div>
  `
  return tpl
}
export default (conf = {}) => {
  // document.getElementById('login-wrapper');
  conf.container.innerHTML = template(conf);
  const $noAutocomplete = getId('no-autocomplete');
  if ($noAutocomplete) {
    $noAutocomplete.style.height = '0';
    $noAutocomplete.style.opacity = '0';
  }
}