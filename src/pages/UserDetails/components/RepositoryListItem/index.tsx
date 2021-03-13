import React from 'react';
import { FaChevronRight, FaCodeBranch, FaStar } from 'react-icons/fa';
import { FiAlertCircle } from "react-icons/fi";
import Repository from '../../../../models/Repository';
import formatStatsNumbers from '../../../../shared/utils/formatStatsNumbers';

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
            <div className="item-info">
                <span className="item-info__name">{repository.name}</span>
                <span className="item-info__language">{repository.language}</span>
                <section className="item-info__stats">
                    <span className="item-info__stats__numbers">
                        <FaStar />{formatStatsNumbers(repository.stargazers_count)}
                    </span>
                    <span className="item-info__stats__numbers">
                        <FaCodeBranch />{formatStatsNumbers(repository.forks_count)}
                    </span>
                    <span className="item-info__stats__numbers">
                        <FiAlertCircle />{formatStatsNumbers(repository.open_issues_count)}
                    </span>
                </section>
            </div>
            <FaChevronRight size={25} />
        </a>
    );
}

export default RepositoryListItem;