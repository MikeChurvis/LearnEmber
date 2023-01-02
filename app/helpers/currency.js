// import { helper } from '@ember/component/helper';
import Helper from '@ember/component/helper';

function currencyHelperFn(positionalParams, namedParams = {}) {
  const [monetaryValue] = positionalParams;
  const currencySymbol = namedParams.sign ?? '$';

  const dollars = Math.floor(monetaryValue);
  const cents = Math.floor((monetaryValue * 100) % 100);

  let centsString = cents.toString();
  if (centsString.length === 1) {
    centsString = '0' + cents;
  }

  return `${currencySymbol}${dollars}.${centsString}`;
}

// export default helper(currencyHelperFn);
export default class currency extends Helper {
  compute = currencyHelperFn;
}
