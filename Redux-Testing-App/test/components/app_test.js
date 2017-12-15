import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


describe('App', ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  });

  it('class [comment-box]를 달고있는 컴포넌트를 가지고 있다.', ()=>{

    
    expect(component.find('.comment-box')).to.exist;
  });

  it('class [comment-list]를 달고있는 컴포넌트를 가지고 있다.', ()=>{

    
    expect(component.find('.comment-list')).to.exist;
  });
  
});


