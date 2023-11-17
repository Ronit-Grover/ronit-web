import { NextResponse } from "next/server"

export const GET = () => {
  const projects = [
    {
      name: "Web Based Password Manager",
      description: "A web-based password manager assisting the users to safely store their passwords.",
    },
    {
      name: "Secured IoT Application for Health Care",
      description: "Implemented AES-256 for secure data transfer from device to database (tested with Google Firebase) using ESP-32 and ESP-8266 microcontrollers. <br />Central goal: prevent Man-in-the-Middle attacks, safeguarding patient data integrity from unauthorized tampering.",
    },
    {
      name: "Quadcopter",
      description: "Designed and developed a fully functional remote-enabled quadcopter with a maximum height capability of 200m and a 45-minute battery life per charge. Utilized a 3D printer to fabricate quadcopter parts, programmed the device, and assembled it. Integrated a detachable camera for capturing stunning shots." ,
    }
  ]

  return NextResponse.json(projects)
}
