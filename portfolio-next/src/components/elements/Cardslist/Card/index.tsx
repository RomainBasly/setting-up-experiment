import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { TbArrowUpRightCircle } from 'react-icons/tb'
import './index.css'

interface Project {
  id: string | number
  title: string
  urlGif: string
  alt: string
  urlGithub: string
  StacksFront: string
  StacksBack?: string
  OtherStacks?: string
  AdditionalLink?: string
}

// Define props type for Card component
interface CardProps {
  data: {
    projects: Project[]
  }
}

export const Card = ({ data }: CardProps) => {
  return data.projects.map((item: Project) => (
    <div key={item.id} className="card-project">
      <h3 className="project-title">{item.title}</h3>
      <Image className="img" src={item.urlGif} alt={item.alt} />
      <div className="project-description">
        <a href={item.urlGithub}>
          {item.urlGithub !== '' && <FaGithub className="githubLink" />}
        </a>
        <ul className="list">
          <li className="project-details">{item.StacksFront}</li>
          {item.StacksBack !== '' && (
            <li className="project-details">{item.StacksBack}</li>
          )}
          {item.OtherStacks !== '' && (
            <li className="project-details">{item.OtherStacks}</li>
          )}
        </ul>
        {item.AdditionalLink !== '' && (
          <a href={item.AdditionalLink}>
            <TbArrowUpRightCircle className="playLink" />
          </a>
        )}
      </div>
    </div>
  ))
}

export default Card
