import _ from 'lodash';

const str = import('app1/utils').then(( str ) => console.log(str.default));

const arr = _.chunk([1,2,3,4,5,6,7,8,9,10], 3);
// 打印arr
console.log('app2',arr);
