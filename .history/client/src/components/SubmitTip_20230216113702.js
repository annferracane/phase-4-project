import * as React from 'react';
import Hero from './Hero';

function SubmitTip() {

    const ctaFirst = ['See Schools','/schools'];

    return (
        <>
            <Hero title="Submit a Tip" summary="Submit a tip for below" ctaFirst={ ctaFirst }/>
        </>
    )

}

export default SubmitTip;