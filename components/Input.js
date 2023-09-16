"use client"

import { useState } from "react"

const Input = ({ command, onsubmit }) => {
  const [_command, setCommand] = useState(command ? command : "")

  const submitHandler = (e) => {
    e.preventDefault()
    const trimmedCommand = _command.trim()
    setCommand("")
    return onsubmit(trimmedCommand)
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label htmlFor="command" className="text-blue">
        <span className="text-orange">λ </span>::{" "}
        <span className="text-purple">~</span>{" "}
        <span className="text-yellow">&gt;&gt;</span>
      </label>

      <input
        type="text"
        className="bg-transparent border-0 outline-none pl-[0.375rem] text-green min-w-[calc(100%-100px)]"
        name="command"
        value={_command}
        onChange={(e) => setCommand(e.target.value.toLowerCase())}
        disabled={command ? true : false}
        ref={(input) => input && !command && input.focus()}
        autoFocus={command === ""}
      />
    </form>
  )
}

export default Input
