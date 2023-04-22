import Header from '../components/header'
import Links from '../components/links'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img src="/me.jpg" height="85" width="200" alt="me" />
        <h1>Sebastian Parada</h1>
        <h2>Software Engineer | Python Developer</h2>

        <Links />
        <div className="explanation">
          <p>
            I love to learn and I think it makes me a versatile Software
            Engineer. I've worked on several fields like Web Applications,
            Integrations among APIs and data manipulation. Each experience has
            allowed me to see stuff from different points of view. When you work
            on the Frontend side you become more aware about Client experience
            than only working on the Backend side.
          </p>
        </div>
      </div>
    </>
  )
}
