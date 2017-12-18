import { expect } from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', ()=>{

    describe('comment를 저장한다.', ()=>{
        it('올바른 타입을 가지고 있는가?',()=>{
            const action = saveComment(undefined);
            expect(action.type).to.equal(SAVE_COMMENT);

        });

        it('올바른 payload를 가지고 있는가?',()=>{
            const action = saveComment('new comment');
            expect(action.payload).to.equal('new comment')

        })
    
    });
});