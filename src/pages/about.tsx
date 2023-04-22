import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import aboutStyles from '../styles/about.module.css'

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

const jobs = [
  {
    company: '🚚 Liftit',
    companySummary:
      'Liftit is the leading technology platform to automate and execute last-mile truck deliveries across Latin America.',
    date: {
      start: 'February 2019',
      end: 'September 2020',
    },
    role: 'Software Engineer',
    description:
      "I worked as member of the Integrations team, connecting Liftit's technology with its clients from Brazil, Equator, Chile, Mexico and Colombia through applications built on Flask, Django and FastAPI.",
  },
  {
    company: '🏦 Galileo FT (through Globant)',
    date: {
      start: 'September 2020',
      end: 'August 2021',
    },
    role: 'Fullstack Engineer',
    description:
      'I worked as a contractor for the System Config Tool Team. This project is an internal tool built in Angular that consumes an API built in Flask. I work on both the backend and frontend sides building new features and enhancing the existing ones. Additionally, I took the initiative to help our QA team by creating functional tests using Selenium.',
  },
  {
    company: '🚚 Smarthop',
    companySummary: '',
    date: {
      start: 'August 2021',
      end: 'February 2023',
    },
    role: 'Data Engineer',
    description:
      "During my time in Smarthop, I've faced some challenges across several topics like infrastructure, deployments, data pipelines, ETLs, and APIs. It allowed me to design and implement solutions integrating tools such as Pub/Sub, Cloud Functions, and Cloud Run to stream and process data. Within those kinds of applications, I've used some DB systems like Snowflake, Google Big Query, and Redis.",
  },
]

export default function About() {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>About Me</h1>
      </div>

      <div className={`${sharedStyles.layout} ${aboutStyles.blogIndex}`}>
        {jobs.reverse().map((job) => {
          return (
            <div className={aboutStyles.postPreview} key={job.company}>
              <h3>
                <span className={aboutStyles.titleContainer}>
                  {/* {!post.Published && (
                    <span className={aboutStyles.draftBadge}>Draft</span>
                  )} */}
                  {/* <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <a>{post.Page}</a>
                  </Link> */}
                  <span>{job.company}</span>
                </span>
              </h3>
              <div className={aboutStyles.jobDescription}>
                <span>{job.role}</span>
                <p>
                  🗓️ {job.date.start} - {job.date.end}
                </p>
                <p>{job.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
