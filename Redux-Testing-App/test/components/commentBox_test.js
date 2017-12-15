import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/commentBox';


describe('CommentBox',()=>{

    let component;

    beforeEach(()=>{
        component = renderComponent(CommentBox);
    });
    
    it('class [comment-box]를 가지고 있다.',()=>{
        
        expect(component).to.have.class('comment-box');
    });

    it('textarea을 가지고 있다.',()=>{
        
        expect(component.find('textarea')).to.exist;
    });

    
    it('button을 가지고 있다.',()=>{
        
        expect(component.find('button')).to.exist;
    });
});