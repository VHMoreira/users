import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Title: React.FC = () => {
    return (
        <section className="title">
            <Link className="title-name" to="/">
                GitView
            </Link>
        </section>
    );
}

export default Title;
