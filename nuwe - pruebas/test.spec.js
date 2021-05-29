"use strict";
const func = require('./index');
describe('Test get items', () => {
    it('Should return number of items with a given last_name', () => {
        expect(func.getFirstItem('Nuwe')).toEqual(9);
    });
    it('Should return first nuwe user id without letters', () => {
        expect(func.getSecondItem()).toEqual('129873');
    });
    it('Should return max first ip value from petless users', () => {
        expect(func.getThirdItem()).toEqual(248);
    });
});
