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
    command: "resume",
    description: "View my resume",
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
      `<h3 class="text-purple">My Projects</h3>` +
      data
        .map((project) => {
          let projectDetails = `<div class="mb-4">`

          // Project Title
          projectDetails += `<div class="project__name">${project.name}</div>`

          // Project Description
          projectDetails += `<div class="text-gray-600">${project.description}</div>`

          // GitHub and Website Links
          if (project.url || project.github) {
            projectDetails += `<div class="mt-2">`

            if (project.url) {
              projectDetails += `<a class="external-link" href="${project.url}" target="_blank">Website</a> | `
            }

            if (project.github) {
              projectDetails += `<a  class="external-link" href="${project.github}" target="_blank">GitHub</a>`
            }

            projectDetails += `</div>`
          }

          projectDetails += `</div>`
          return projectDetails
        })
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
          <a class="external-link" href="${contact.url}" target="_blank">
          <b>${contact.username}</b></a>
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
  <br />
  I'm in my last year of Computer Science and Engineering at <a href="https://thapar.edu/" class="external-link" target="_blank">TIET</a> in Patiala, and I'm very interested in technology. I finished high school at the <a href="http://dav14gurgaon.com/" class="external-link" target="_blank">D.A.V. Public School</a> in Gurgaon. I love to keep up with the latest tech trends and am always looking for new creative ideas to try. As I move towards new opportunities, I'm excited to use my skills to help people. Feel free to get in touch if you want to make links or work together. Let's look at the options together!`
}

export const getSkills = () => {
  return `I have experience working with the following technologies:
  <br />
  <b class="skill-group">Programming Languages:</b>C/C++, JavaScript, TypeScript, Python
  <br />
  <b class="skill-group">Frontend:</b> ReactJS, NextJS, HTML, CSS, Tailwind
  <br />
  <b class="skill-group">Database:</b> Oracle,MySQL, MongoDB
  <br />
  <b class="skill-group">Others:</b> Git, Linux, AWS, Docker`
}

export const getEducation = () => {
  return `In my final year at <a href="https://thapar.edu/" class="external-link" target="_blank">Thapar Institute of Engineering and Technology (TIET)</a> in Patiala, I have achieved a CGPA of 9.33 while majoring in Computer Science. I graduated from <a href="http://dav14gurgaon.com/" class="external-link" target="_blank">D.A.V. Public School</a>, Gurgaon with a 92% in Class 12 before beginning my current endeavours. I had previously achieved a 96.6% in Class 10 during my time at the same school. `
}

export const error = (input) => {
  return `<div class="error">sh: Unkonown command: ${input}</div><div>See <span class="help-command">\`help\`</span> for a list of available commands</div>`
}

export const getHelp = () => {
  return (
    commands
      .map(
        (
          command
        ) => `<div style="display: flex; justify-content: space-between;">
      <p class="help-command" style="font-size: 16px">${command.command}</p>
      <p>${command.description}</p>
    </div>`
      )
      .join("") +
    `<br />
    <div class="command">Type one of the above to view. For eg. <span class="help-command">about</span></div>`
  )
}

export const redirectResume = () => {
  window.open("https://harsh-resu.me", "_blank")
  return ""
}

export const COMMANDS = {
  projects: getProjects,
  contact: getContacts,
  about: getAbout,
  skills: getSkills,
  education: getEducation,
  resume: redirectResume,
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
