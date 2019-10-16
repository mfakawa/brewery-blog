import React from 'react';
import NewestEntries from './newestEntries.js';
import EventsShort from './eventsShort.js';


const Homepage = () => {
    return (
        <div className="homepage">
            <NewestEntries />
            <EventsShort />
        </div>
    )
}

export default Homepage;