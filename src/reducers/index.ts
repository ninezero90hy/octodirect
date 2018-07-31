import { userInfoReducers } from './userInfo.reducers';
import { combineReducers } from 'redux';
import { reposReducers } from './repos.reducers';
import { viewReducers } from './view.reducers';

const rootReducers = combineReducers({
  repos: reposReducers,
  view: viewReducers,
  userInfo: userInfoReducers,
});

export default rootReducers;
