const COMMANDS = [
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

const getProjects = async () => {
  const res = await fetch(
    new Request(createURL("/api/projects"), {
      method: "GET",
    })
  )

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

const getContacts = async () => {
  const res = await fetch(
    new Request(createURL("/api/contacts"), {
      method: "GET",
    })
  )

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
  }
}

export const CONTENTS = {
    help: () => {
        COMMANDS.map((command) => `<div class="command">
        <p class="command-name">${command.command}</p>
        <p class="command-description">${command.description}</p>
        </div>`).join("") + `<br />
        <div class="command">
        Type one of the above commads to get started`
    },

    about: () => {
        `Hi! I'm Harsh Dawar, a ${getAge("2002/01/16")} year old software developer from India.
        <br /><br />
        I'm currently pursuing my B.E. from TIET Patiala. I'm passionate about building things for the web and I love to learn new things.`
    },

    education: () => {
        `I am currently pursuing my B.E. in Computer Science from Thapar Institute of Engineering and Technology, Patiala. and I am a graduate from D.A.V. Public School, Gurgaon`
    },

    skills: () => {
        `I have experience working with the following technologies:
        <br /><br />
        <b>Programming Languages:</b>C/C++, JavaScript, TypeScript, Python
        <br /><br />
        <b>Frontend:</b> ReactJS, NextJS, HTML, CSS, Tailwind
        <br /><br />
        <b>Database:</b> Oracle,MySQL, MongoDB
        <br /><br />
        <b>Others:</b> Git, Linux, AWS, Docker`
    },

    projects: getProjects,

    contact: getContacts,

    error: (input) => {
        `<div class="error">sh: Unkonown command: ${input}</div><div class="help-command">See \`help\` for a list of available commands</div>`
    },
    
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
