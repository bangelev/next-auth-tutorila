import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 100px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function SCSSinJS() {
  return (
    <>
      <Title>Styled Component</Title>
    </>
  )
}

export default SCSSinJS

const Title = styled.h1`
  font-size: 200px;
  color: ${({ theme }) => theme.colors.primary};
`
