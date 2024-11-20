import { LazyLoadImage } from 'react-lazy-load-image-component'

const MyImage = ({
  image,
}: {
  image: {
    alt: string
    height: number
    src: string
    width: number
    caption: string
    className: string
  }
}) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width}
      className={image.className}
    />
    <span>{image.caption}</span>
  </div>
)

export default MyImage
