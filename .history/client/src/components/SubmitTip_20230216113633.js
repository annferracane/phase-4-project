import * as React from 'react';
import Hero from './Hero';

function SubmitTip() {

    const ctaFirst = ['See Schools','/schools'];

    return (
        <>
            <Hero title="Submit a Tip" summary="Check out our collection of schools below, and click to see their associated college tips submitted by current students and alumni!" ctaFirst/>
        </>
    )

}

export default SubmitTip;