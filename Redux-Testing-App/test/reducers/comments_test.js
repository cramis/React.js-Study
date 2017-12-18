import { expect } from '../test_helper';

import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';


describe('Comments Reducers',()=>{

    it('모르는 타입에 대해 액션을 핸들링할것',()=>{
        expect(commentReducer(undefined, {})).to.be.instanceof(Array);
        expect(commentReducer(undefined, {})).to.be.eql([]);
        

    });

    it('SAVE_COMMENT 액션 타입에 대해 핸들링 할것', ()=>{
        const action = { type : SAVE_COMMENT, payload : 'new comment'};
        expect(commentReducer([], action)).to.be.eql(['new comment']);
    });
});