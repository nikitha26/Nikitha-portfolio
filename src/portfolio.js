const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'N',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nikitha',
  role: 'Front End Engineer',
  description:
    "I'm Software Engineer & Programmer Living in Hyderabad,India.I have 1+ years of professional experience in Front End Development.I have diverse set of skills React,NPM,Axios,JavaScript,HTML,Css etc.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nikithamalkapuram/',
    github: 'https://github.com/nikitha26',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'This is an E-Commerce website(Shopping Cart). Built in React Js.',
    stack: ['React', 'React Hooks', 'API Integration'],
    sourceCode: 'https://github.com/nikitha26/ShoppingCart',
    livePreview: 'https://nikitha26.github.io/ShoppingCart/',
  },
  {
    name: 'Project 2',
    description:
      'Integrated Weather API with Frontend templates',
    stack: ['React', 'Open WeatherMap API', 'Javascript'],
    sourceCode: 'https://github.com/nikitha26/weather-app',
    livePreview: 'https://nikitha26.github.io/weather-app/',
  },
  {
    name: 'Project 3',
    description:
      'Integrated Rest API to fetch Random User Profiles from the server.',
    stack: ['React', 'Random User API', 'Hooks'],
    sourceCode: 'https://github.com/nikitha26/Random-User-API',
    livePreview: 'https://nikitha26.github.io/Random-User-API/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'React Hooks',
  'React-Routers',
  'NPM',
  'Axios',
  'JavaScript',
  'Git',
  'Rest API Integration',
  'AWS Amplify Hosting',
  'Material UI',
  'HTML',
  'CSS',
  'Bootstrap',
  'Jquery',

  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mnikitha365@mail.com',
}

export { header, about, projects, skills, contact }
