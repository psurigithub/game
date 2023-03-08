import {
  ScoreContainer,
  ScoreNameContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreContainer>
      <ScoreNameContainer>
        <ScoreName>
          Rock <br />
          Paper <br />
          Scissor
        </ScoreName>
      </ScoreNameContainer>
      <ScoreBoard>
        <ScoreHeading>score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoard>
    </ScoreContainer>
  )
}
export default ScoreView
