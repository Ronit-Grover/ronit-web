const commands = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My tech skills",
  },
  {
    command: "projects",
    description: "My Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "clear",
    description: "Clear the terminal screen",
  },
]


export const getProjects = async () => {
  const res = await fetch("/api/projects")

  if (res.ok) {
    const data = await res.json()
    const projectHTML =
      `<h3>My Projects</h3>` +
      data
        .map(
          (project) => `<div class="project">
          <a href="${project.url} target="_blank">
          <b class="project-name">${project.name}</b></a> - <b>${project.description}</b>
          </div>`
        )
        .join("")
    return projectHTML
  } else {
    const ErrorHTML = `<div class="error">Error fetching projects from API</div>`
    return ErrorHTML
  }
}

export const getContacts = async () => {
  const res = await fetch("/api/contacts")

  if (res.ok) {
    const data = await res.json()
    return data
      .map(
        (contact) => `<div class="contact">
          <p class="contact-platform">${contact.platform}</p>
          <a class="link" href="${contact.url}" target="_blank">${contact.username}</a>
          </div>`
      )
      .join("")
  } else {
    throw new Error(`Error fetching contacts: ${res.status} ${res.statusText}`)
  }
}

export const getAbout = () => {
  return `Hi! I'm Harsh Dawar, a ${getAge(
    "2002/01/16"
  )} year old software developer from India.
  <br /><br />
  I'm currently pursuing my B.E. from TIET Patiala. I'm passionate about building things for the web and I love to learn new things.`
}

export const getSkills = () => {
  return `I have experience working with the following technologies:
  <br /><br />
  <b>Programming Languages:</b>C/C++, JavaScript, TypeScript, Python
  <br /><br />
  <b>Frontend:</b> ReactJS, NextJS, HTML, CSS, Tailwind
  <br /><br />
  <b>Database:</b> Oracle,MySQL, MongoDB
  <br /><br />
  <b>Others:</b> Git, Linux, AWS, Docker`
}

export const getEducation = () => {
  return `I am currently pursuing my B.E. in Computer Science from Thapar Institute of Engineering and Technology, Patiala. and I am a graduate from D.A.V. Public School, Gurgaon`
}

export const error = () => {
  return `<div class="error">sh: Unkonown command: ${input}</div><div class="help-command">See \`help\` for a list of available commands</div>`
}

export const COMMANDS = {
  projects: getProjects,
  contact: getContacts,
  about: getAbout,
  skills: getSkills,
  education: getEducation,
  error: error,
}

const getAge = (date) => {
  const today = new Date()
  const bday = new Date(date)

  let age = today.getFullYear() - bday.getFullYear()
  const m = today.getMonth() - bday.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
    age--
  }
  return age
}
