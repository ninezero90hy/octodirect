import { createAction } from './createAction';
import { ActionsUnion } from '../types';
import { ItemType } from '../model/item.model';

export const enum ActionTypes {
  FETCH_REQUEST = 'FETCH_REQUEST',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAIL = 'FETCH_FAIL',

  INCREMENT_INDEX = 'INCREMENT_INDEX',
  DECREMENT_INDEX = 'DECREMENT_INDEX',

  UPDATE_VALUE = 'UPDATE_VALUE',
  TOGGLE_VIEW = 'TOGGLE_VIEW',
}

export const actions = {
  incrementIndex: () => createAction(ActionTypes.INCREMENT_INDEX),
  decrementIndex: () => createAction(ActionTypes.DECREMENT_INDEX),

  updateValue: (value: string) => createAction(ActionTypes.UPDATE_VALUE, value),

  fetchRequest: () => createAction(ActionTypes.FETCH_REQUEST),
  fetchSuccess: (repos: ItemType[]) =>
    createAction(ActionTypes.FETCH_SUCCESS, repos),
  fetchFail: (error: string) => createAction(ActionTypes.FETCH_FAIL, error),
  toggleView: () => createAction(ActionTypes.TOGGLE_VIEW),
};

export type Actions = ActionsUnion<typeof actions>;