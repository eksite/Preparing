import React from 'react';
import {shallow, mount} from 'enzyme';

import First from './first';

describe('First', () => {
  const shallowFirst = props => shallow(<First {...props}/>);
  const mountFirst = props => mount(<First {...props}/>);

  it('should create component', () => {
    mountFirst().should.have.type(First);
  });

  it('should wrap children with div', () => {
    shallowFirst().should.have.tagName('div');
  });

  it('should use passed className', () => {
    shallowFirst({
      className: 'test-class'
    }).should.have.className('test-class');
  });

  // TODO Add more tests
});
