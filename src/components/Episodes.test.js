
import React from 'react';
import {render} from '@testing-library/react';
import Episodes from './Episodes';

// Test 1
// Test that the component renders with empty props

test('renders without errors', () => {
    const {} = render(<Episodes episodes={[]} error='Episode.js Test 1 Error' />);
});

// Test 2:

// Test that the episode list renders

const mockEpisodeData = [

    {
        id: 553946,
        url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers"
        ,name: "Chapter One: The Vanishing of Will Byers"
        ,season: 1
        ,number: 1
        ,airdate: "2016-07-15"
        ,airtime: ""
        ,airstamp: "2016-07-15T12:00:00+00:00"
        ,runtime: 60
        ,image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
        ,original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
    }},

    {
        id: 578663
        ,url: "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street"
        ,name: "Chapter Two: The Weirdo on Maple Street"
        ,season: 1
        ,number: 2
        ,airdate: "2016-07-15"
        ,airtime: ""
        ,airstamp: "2016-07-15T12:00:00+00:00"
        ,runtime: 60
        ,image:{
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg"
        ,original: "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
    }}
]

    test('Episode list renders the list of the episodes', () => {
        const {queryAllByTestId, rerender} = render(
            <Episodes episodes={[]} error='Episode.test Test 2 error'/>
        );

        expect(queryAllByTestId(/episodes/i)).toHaveLength(0);

        rerender(<Episodes episodes={mockEpisodeData} error=''/>);
        expect(queryAllByTestId(/episodes/)).toHaveLength(2);
    })
