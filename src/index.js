// 引入公共库
import './utils/flexible.js';
import './themes/index.less';
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';

import Router from './router';

// 配置路由
render(<Router />, document.getElementById('app'));