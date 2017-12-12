import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


describe('App', ()=>{

  it('div 안에 무슨 글이 있더라?', ()=>{

    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');
  });
  
  
});


