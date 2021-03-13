import React from 'react';
import { FaHome } from "react-icons/fa";

import './styles.scss';

const Title: React.FC = () => {
    return (
        <section className="title">
            <FaHome className="title-icon" size={30} />
            <span className="title-name">
                Busca de usuários
            </span>
        </section>
    );
}

export default Title;
