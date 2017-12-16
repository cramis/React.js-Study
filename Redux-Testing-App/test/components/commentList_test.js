import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/commentList';

describe('Comment List',()=>{
    let component;

    beforeEach(()=>{
        component = renderComponent(CommentList, null, {comments : ['new comment', 'other comment']});
    });

    it('각각의 코멘트에 대한 LI의 갯수가 맞는가?', ()=>{
        expect(component.find('li').length).to.equal(2);
    });

    it('각각의 제공되고 있는 코멘트를 보여줘', ()=>{
        expect(component).to.contain('new comment');
        expect(component).to.contain('other comment');
    });
});