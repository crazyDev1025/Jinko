import React from 'react'
import styled from 'styled-components'
import { Loader } from '@mantine/core'
import Page from '../Layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <img src='/images/loading.gif?v=2' alt='logo' style={{ maxWidth: "200px" }} /> */}
      <Loader size="xl" />
    </Wrapper>
  )
}

export default PageLoader
