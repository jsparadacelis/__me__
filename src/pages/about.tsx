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
    date: {
      start: 'February 2019',
      end: 'September 2020',
    },
    role: 'Software Engineer',
    description:
      "Liftit is the leading technology platform to automate and execute last-mile truck deliveries across Latin America. I worked as member of the Integrations team, connecting Liftit's technology with its clients from Brazil, Equator, Chile, Mexico and Colombia through applications built on Flask, Django and FastAPI.",
    bulletPoints: [
      'Designed and developed integrations between Liftit and its clients located over several LatAm countries through API integrations and gateways.',
      'Eliminated the manual work of filling out official documents through the orchestration and integration with SOAP services through a REST API. This meant a decrease from 20 minutes to just 15 seconds approx.',
      'Created the first version of the Excel files loader. This was a Django app allowing users to load their orders to our system by dragging and dropping a file and then going through the rows to create orders using our local API.',
      'Reduced the number of missing incoming requests by design and implement a retry requests server which stored and retried missing requests between our clients and internal APIs. This app identifies wrong HTTP requests and then retries them by enqueueing requests on a Rabbit MQ queue.',
    ],
    tools:
      'Flask · Django · FastAPI · GCP Cloud Run · PostgreSQL · RabbitMQ · MongoDB',
  },
  {
    company: '🏦 Galileo FT (through Globant)',
    date: {
      start: 'September 2020',
      end: 'August 2021',
    },
    role: 'Fullstack Engineer',
    description:
      'Galileo is the API Standard for Card Issuing and Digital Banking. I worked as a contractor for the System Config Tool Team. This project is an internal tool built in Angular that consumes an API built in Flask.',
    bulletPoints: [
      "Designed and implemented the notes feature that enabled users to track the updates on products and linked them with the JIRA's system.",
      'Conducted some user functional tests and gathered feedback to ensure that the exisitng and new features met user needs and was integrated seamlessly into the existing workflow.',
      'Wrote comprehensive unit and automation tests using Pytest and Selenium to ensure the reliability and functionality of the Angular application and Flask API.',
      'Contributed to the development of a robust and maintainable test suite, including test fixtures to simplify test writing and improve coverage.',
    ],
    tools: 'Angular · Flask · OracleDB · Selenium',
  },
  {
    company: '🚚 Smarthop',
    date: {
      start: 'August 2021',
      end: 'February 2023',
    },
    role: 'Data Engineer',
    description:
      'SmartHop uses artificial intelligence to deliver smart load recommendations, full-service back-office support, performance tracking, and digital bookings at guaranteed above-market rates for small trucking companies.',
    bulletPoints: [
      "Created a mono repo to handle CI/CD processes for 20 applications among internal libraries, microservices, and monitors.",
      "Improved latency of APIs by implementing caching processes to handle ~200K req/hr approx reducing computing costs.",
      "Implemented a data pipeline to detect and update cached data by applying a message queuing design. Designed ETL processes enabling analysis and building of ML models to predict the US cargo market behavior.",
    ],
    tools:
      "GCP Cloud Run · Cloud Functions · PubSub · FastAPI · Airflow · Snowflake · Redis · Terraform · Docker",
  },
  {
    company: '🏦 Bold',
    date: {
      start: "February 2023",
      end: "September 2024",
    },
    role: "Software Engineer",
    description:
      "Bold creates financial tools that allow users to increase sales by receiving card payments. I'm part of the credit team as a backend developer",
    bulletPoints: [
      "Designed and implemented the migration feature to migrate at least 4k clients among product versions through mobile app working aside frontend and mobile app teams.",
      "Refactored existing credits data warehouse into a lakehouse schema using dbt as a tool by designing and implementing more than 20 models applying the medallion model to improve readability to operative teams.",
      "Implemented the down payment and the credit amount update features enabling users to alleviate their debts.",
    ],
    tools: "AWS Lambdas · DynamoDB",
  },
  {
    company: "🛒 Mercadona Tech (Valencia, Spain)",
    date: {
      start: "October 2024",
      end: "",
    },
    role: "Software Engineer",
    description:
      "",
    bulletPoints: [
    ],
    tools: "Python · Django",
  }
]

export default function About() {
  return (
    <>
      <Header titlePre="About" />
      <div className={sharedStyles.layout}>
        <h1 style={{ marginTop: 0 }}>Work experience</h1>
      </div>

      <div className={`${sharedStyles.layout} ${aboutStyles.blogIndex}`}>
        {jobs.reverse().map((job) => {
          return (
            <div className={aboutStyles.postPreview} key={job.company}>
              <h3>
                <span className={aboutStyles.titleContainer}>
                  <span>{job.role}</span>
                </span>
              </h3>
              <div className={aboutStyles.jobDescription}>
                <span>{job.company}</span>
                <p>⚒️ {job.tools}</p>
                <p>
                  🗓️ {job.date.start} - {job.date.end}
                </p>
                <p>{job.description}</p>
                <ul>
                  {job.bulletPoints?.map((point) => {
                    return (
                      <li>
                        <p>{point}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
