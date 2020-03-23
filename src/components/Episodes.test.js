
import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';

// Test 1
// Test that the component renders with empty props

test('renders without errors', () => {
    const {} = render(<Episodes episodes={[]} error='Episode.js Test 1 Error' />);
});