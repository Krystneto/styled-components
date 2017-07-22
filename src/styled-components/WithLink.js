import { Button } from './Button'

export const WithLink = Button.withComponent('a');

export const WithTomatoLink = WithLink.extend`
    color: tomato;
    border: tomato;
`