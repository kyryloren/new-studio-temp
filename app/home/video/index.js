import { CustomVideo, VideoSection } from './styles'

const Video = ({ data }) => {
  return (
    <VideoSection id="video-section">
      <CustomVideo id="inner-video" playsInline autoPlay muted loop>
        <source
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + data?.reel?.url}
        />
      </CustomVideo>
    </VideoSection>
  )
}

export default Video
