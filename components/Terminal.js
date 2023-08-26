"use client"

import { useState, useRef } from "react"
import { CONTENTS } from "@/utils/alfred"
import {
  getProjects,
  getContacts,
  getAbout,
  getSkills,
  getEducation,
  COMMANDS,
} from "@/utils/getter"
import Command from "./Command"

const Terminal = () => {
  const [commands, setCommands] = useState([])
  const [loading, setLoading] = useState(false)
  const terminalRef = useRef(null)

  const escapeHTML = (str) =>
    str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")

  const addCommand = async (command) => {
    let output
    setLoading(true)
    setCommands([...commands, { command, output: "Loading..." }])

    if(command === "help"){
      output = "projects contacts about skills education clear"
    } else if (command === "projects"){
      output = await getProjects()
    } else if(command === "contact"){
      output = await getContacts()
    } else if (command in COMMANDS) {
      output = COMMANDS[command]()
    } else if (command === "clear") {
      setLoading(false)
      return setCommands([])
    } else {
      output = "not a recognized command"
    }

    setLoading(false)
    setCommands([...commands.slice(0, commands.length), { command, output }])
    if (terminalRef) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  return (
    <div
      className="terminal max-h-[calc(100vh-160px)] overflow-y-scroll mb-5"
      ref={terminalRef}
    >
      {commands.map(({ command, output }, index) => (
        <Command command={command} output={output} key={index} />
      ))}
      {!loading && <Command onSubmit={(command) => addCommand(command)} />}
    </div>
  )
}

export default Terminal
