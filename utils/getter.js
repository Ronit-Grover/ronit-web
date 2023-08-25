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
