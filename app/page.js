import Terminal from "@/components/Terminal"

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen px-2 py-0 flex flex-col justify-center h-screen max-w-2xl">
      <h1 className="text-purple text-3xl sm:text-5xl ">
        Harsh_Dawar:${" "}
        <span className="text-green text-2xl">enter help to get started</span>
      </h1>
      <Terminal />
    </div>
  )
}
