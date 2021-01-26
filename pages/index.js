import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget/index'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner/index'
import QuizBackground from '../src/components/QuizBackground/index'



// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

// function Title(props){ //props
// return <h1>{props.children}</h1>
// }

//div com o backgound


// export default function Home() {
//   return <Title>My page</Title>
// }

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex:1;
//   background-size:cover;
//   background-position:center;
// `

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>adasdasdfahadhasdhasdh</h1>
          </Widget.Header>
          <Widget.Content>
            <p>asdasdadasddsa</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>adasdasdfahadhasdhasdh</h1>
            <p>asdasdadasddsa</p>
          </Widget.Content>
        </Widget>
        <Footer>

        </Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joaoeduardodev"/>
    </QuizBackground>
  );
}
