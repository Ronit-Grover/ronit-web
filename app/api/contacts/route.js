import { NextResponse } from "next/server"

export const GET = () => {
  const contacts = [
    {
      platform: "LinkedIn",
      username: "Ronit Grover",
      url: "https://www.linkedin.com/in/ronitgrover/",
    },
    {
      platform: "GitHub",
      username: "Ronit-Grover",
      url: "https://github.com/Ronit-Grover",
    },
    {
      platform: "email",
      username: "groverronit99@gmail.com",
      url: "mailto:groverronit99@gmail.com",
    },
    {
      platform: "Twitter",
      username: "RonitGrover9",
      url: "https://x.com/RonitGrover9?t=ED2t9e9oj5Zyydh-B3QzHA&s=09",
    },
  ]

  return NextResponse.json(contacts, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  })
}
