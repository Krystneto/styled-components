import styled from 'styled-components'

export const InputAttrs = styled.input.attrs({
    type: 'password',
    margin: props => props.size || '1em',
    padding: props => props.size || '1em'
})`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`