import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #04021a;
    }

    code {
        font-weight: 500;
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    button{
        cursor: pointer;
    }

    ul, li{
        list-style: none;
        margin: 10px 0;
        padding: 0;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`;