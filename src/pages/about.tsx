import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/jsparadacelis',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/jsparadacelis',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/jsparadacelis/',
  },
]

export default function About() {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>About Me</h1>
      </div>
    </>
  )
}
