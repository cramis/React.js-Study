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

    describe('텍스트를 입력하게 된다면...',()=>{

        beforeEach(()=>{
            component.find('textarea').simulate('change', 'new comment');
        });
        
        it('텍스트를 textarea에 입력해서 보여준다.',()=>{
            
            expect(component.find('textarea')).to.have.value('new comment');
        });
    
        it('submit을 하면 텍스트가 지워진다.',()=>{
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});