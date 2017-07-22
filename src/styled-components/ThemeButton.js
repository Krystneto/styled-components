import styled from 'styled-components';

export const ThemeButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background: white;
    color: ${props => props.theme.main};
    border: 2px solid ${props => props.theme.main};
`

ThemeButton.defaultProps = {
    theme: {
        main: 'palevioletred'
    }
}

