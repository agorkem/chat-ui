import { expect } from 'chai';
import reducer from '../../src/reducers/users';
import { ADD_USER, REMOVE_USER } from '../../src/constants/ActionTypes';

describe('User', () => {
  describe('addUser', () => {
    it('should add new user to an empty state', () => {
      const user = { id: 0, username: 'Gorkem' };
      const state = [];
      const nextState = reducer(state, {
        user,
        type: ADD_USER,
      });

      expect(nextState).to.eql([{ id: 0, username: 'Gorkem' }]);
    });
  });

  describe('removeUser', () => {
    it('should remove user with given id from state', () => {
      const state = [
        {
          id: 1,
          name: 'Gorkem',
        },
        {
          id: 0,
          name: 'Meltem',
        },
      ];

      const nextState = reducer(state, {
        userId: 1,
        type: REMOVE_USER,
      });

      expect(nextState).to.eql([
        {
          id: 0,
          name: 'Meltem',
        },
      ]);
    });
  });
});
