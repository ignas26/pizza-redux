import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss'
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';
// import me from './playground/default-exports';
// import {food, getInfo} from './playground/named-exports';
// import {food as maistas} from './playground/named-exports';
// import * as all  from './playground/named-exports';

import AppRoutes from './AppRoutes';

ReactDOM.render(<AppRoutes/>, document.getElementById('root'));
registerServiceWorker();
