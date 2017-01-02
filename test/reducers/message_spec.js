 import { expect } from 'chai';
 import reducer from '../../src/reducers/messages';
 import { ADD_MESSAGE, REMOVE_MESSAGE } from '../../src/constants/ActionTypes';

 describe('Message', () => {
   describe('addMessage', () => {
     it('should add message to an empty state', () => {
       const message = {
         id: 0,
         text: 'Lorem ipsum',
       };

       const state = [];

       const nextState = reducer(state, {
         message,
         type: ADD_MESSAGE,
       });

       expect(nextState).to.eql([
         {
           id: 0,
           text: 'Lorem ipsum',
         },
       ]);
     });

     it('should add message to the current state', () => {
       const state = [{
         id: 0,
         text: 'Test message one',
       }];

       const nextState = reducer(state, {
         message: {
           id: 1,
           text: 'Test message two',
         },
         type: ADD_MESSAGE,
       });

       expect(nextState).to.eql([
         {
           id: 0,
           text: 'Test message one',
         }, {
           id: 1,
           text: 'Test message two',
         },
       ]);
     });
   });

   describe('removeMessage', () => {
     it('should remove message with given id from state', () => {
       const state = [
         {
           id: 1,
           text: 'Test message one',
         }, {
           id: 0,
           text: 'Test message two',
         },
       ];

       const nextState = reducer(state, {
         messageId: 1,
         type: REMOVE_MESSAGE,
       });

       expect(nextState).to.eql([{
         id: 0,
         text: 'Test message two',
       }]);
     });
   });
 });
