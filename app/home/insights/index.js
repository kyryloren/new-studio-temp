'use client'

import { Container, GridWrapper, NormalText } from 'styles'
import { FillerBox, InsightsSection, Line, TitleLineWrapper } from './styles'
import { CustomLink, Marquee } from 'components'

const Slider = () => {}

const Insights = () => {
  return (
    <InsightsSection>
      <Container>
        <GridWrapper>
          <Line />
          <TitleLineWrapper>
            <NormalText>Insights by New Studio</NormalText>
            <CustomLink href="/insights">Read All Insights</CustomLink>
          </TitleLineWrapper>
          <Slider />
          <div className="marquee">
            <Marquee>
              <FillerBox />
              <FillerBox />
              <FillerBox />
              <FillerBox />
              <FillerBox />
            </Marquee>
          </div>
        </GridWrapper>
      </Container>
    </InsightsSection>
  )
}

export default Insights
