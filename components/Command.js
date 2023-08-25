"use client"

import Output from "./Output"
import Input from "./Input"

const Command = ({ command, output, onSubmit }) => {
  return (
    <div>
      <Input command={command} onsubmit={(command) => onSubmit(command)} />
      {output && <Output output={output} />}
    </div>
  )
}

export default Command
