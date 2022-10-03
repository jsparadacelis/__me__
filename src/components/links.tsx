import contactStyles from '../styles/contact.module.css'

import ExtLink from './ext-link'
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

export default function Links() {
  return (
    <>
      <div>
        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
