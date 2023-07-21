import React from 'react';
import { Helmet } from 'react-helmet';

const Metatags = ({ title,description, viewport, robots, googlebot }) => {
    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={description}/>
            <meta name="viewport" content={viewport}></meta>
            <meta name="robots" content={robots}></meta>
            <meta name="googlebot" content={googlebot}></meta>
        </Helmet>
    )
}

export default Metatags;