import { FaGithub } from 'react-icons/fa'
import { TbArrowUpRightCircle } from 'react-icons/tb'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Card = ({ data }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.projects.map((item: any) => (
    <div key={item.id} className="card-project">
      <>{console.log('item', item)}</>
      <h3 className="project-title">{item.title}</h3>
      <img className="img" src={item.urlGif} alt={item.alt}></img>
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
