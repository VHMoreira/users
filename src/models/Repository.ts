interface Owner {
    avatar_url: string;
}

interface Repository {
    id: number;
    node_id: string;
    owner: Owner;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    url: string;
    updated_at: Date;
    clone_url: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks_count: number;
    open_issues_count: number;
}

export default Repository;