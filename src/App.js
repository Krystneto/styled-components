import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'

import { Title } from './styled-components/Title';
import { Wrapper } from './styled-components/Wrapper';
import { Input } from './styled-components/Input';
import { Button } from './styled-components/Button';
import { Link } from './styled-components/Link';
import { StyledLink } from './styled-components/StyledLink';
import { TomatoButton } from './styled-components/TomatoButton';
import { WithLink, WithTomatoLink } from './styled-components/WithLink'
import { InputAttrs } from './styled-components/InputAttrs'
import { Rotate } from './styled-components/Rotate'
import { ThemeButton } from './styled-components/ThemeButton'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title>
            Hello World, this is my first styled comoponent!
          </Title>
          <Input placeholder="@mxstbr" type="text" />
          <hr />
          <Input placeholder="@geelen" type="text" />
          <hr />
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <br />
          <h4>Unstyled Link -- 
            <Link> google.com</Link>
          </h4>
          <h4>Styled Link -- 
            <StyledLink> google.com</StyledLink>
          </h4>
          <hr />
          <Button>Normal</Button>
          <TomatoButton>TomatoButton</TomatoButton>
          <hr />
          <Button>Normal Button</Button>
          <WithLink>Normal Link</WithLink>
          <WithTomatoLink>Tomato Link</WithTomatoLink>
          <hr />
          <InputAttrs placeholder="A small text input" size="1em" />
          <InputAttrs placeholder="A bigger text input" size="2em" />
          <Rotate><span>OMG!!!</span></Rotate>
          <hr />
          <ThemeButton>Normal</ThemeButton>
          <ThemeProvider theme={{ main: 'mediumseagreen' }}>
            <ThemeButton>Themed</ThemeButton>
          </ThemeProvider>
        </Wrapper>
      </div>
    );
  }
}

export default App;
