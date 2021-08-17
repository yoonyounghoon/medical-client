import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
       box-sizing: border-box;
       font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
    body {
        margin: 0;
        background: ${({ theme }: any) => theme.mode.mainBackground};
    }

    h1,
    h2,
    h3,
    h4 {
        margin: 0;
    }

    a {
        text-decoration: none;
        color: #111723;
    }

    p {
        margin: 0;
    }
`;
