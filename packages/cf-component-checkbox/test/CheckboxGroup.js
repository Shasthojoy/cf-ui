import React from 'react';
import assertEqualJSX from '../../../utils/assertEqualJSX';
import CheckboxGroup from '../src/CheckboxGroup';
import Checkbox from '../src/Checkbox';

describe('CheckboxGroup', function() {
  it('should render', function() {
    assertEqualJSX(
      <CheckboxGroup
        values={['option1']}
        onChange={() => {}}
        options={[
          { label: 'Option 1', name: 'group-option-1', value: 'option1' },
          { label: 'Option 2', name: 'group-option-2', value: 'option2' }
        ]}/>,
      // should equal
      <div className="cf-checkbox__group">
        <Checkbox
          label="Option 1"
          name="group-option-1"
          value="option1"
          checked={true}
          onChange={() => {}}/>
        <Checkbox
          label="Option 2"
          name="group-option-2"
          value="option2"
          checked={false}
          onChange={() => {}}/>
      </div>
    );
  });
});