import React from 'react';
import HomepageTop from './homepageTop.js';
import NewestEntries from './newestEntries.js';
import EventsShort from './eventsShort.js';


const Homepage = () => {
    return (
        <div className="homepage">
            <HomepageTop />
            <NewestEntries />
            <EventsShort />
        </div>
    )
}

export default Homepage;