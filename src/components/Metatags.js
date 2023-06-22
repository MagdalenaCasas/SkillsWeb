import React from 'react';
import { Helmet } from 'react-helmet';

const Metatags = ({ title, description }) => {
    return (
        <Helmet>
            <title>{ title }</title>
            <meta name="description" content={ description }/>
            {/* Puedes añadir tantas etiquetas meta como quieras en este componente */}
        </Helmet>
    )
}

export default Metatags;