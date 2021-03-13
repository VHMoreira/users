import React from 'react';
import { FaChevronRight, FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';
import { FiAlertCircle } from "react-icons/fi";
import Repository from '../../../../models/Repository';

import './styles.scss';

interface Props {
    repository: Repository;
}

const RepositoryListItem: React.FC<Props> = ({ children, repository }) => {
    return (
        <a
            key={repository.id}
            className="item"
            href={repository.html_url}>
            <img className="item-avatar" src={repository.owner.avatar_url} alt={repository.full_name} />
            <div className="info">
                <span className="info-name">{repository.full_name}</span>
                <span className="info-clone">git clone {repository.clone_url}</span>
                <section className="info-stats">
                    <span className="info-stats__numbers">
                        <FaStar />{repository.stargazers_count}
                    </span>
                    <span className="info-stats__numbers">
                        <FaEye />{repository.watchers_count}
                    </span>
                    <span className="info-stats__numbers">
                        <FaCodeBranch />{repository.forks_count}
                    </span>
                    <span className="info-stats__numbers">
                        <FiAlertCircle />{repository.open_issues_count}
                    </span>
                </section>
            </div>
            <FaChevronRight size={25} />
        </a>
    );
}

export default RepositoryListItem;