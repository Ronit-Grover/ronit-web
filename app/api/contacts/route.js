import { NextResponse } from "next/server"

export const GET = () => {
  const contacts = [
    {
      platform: "LinkedIn",
      username: "Harsh Dawar",
      url: "https://www.linkedin.com/in/harsh-dawar/",
    },
    {
      platform: "GitHub",
      username: "HARSH16DAWAR",
      url: "https://github.com/HARSH16DAWAR",
    },
    {
      platform: "email",
      username: "hdawar16@gmail.com",
      url: "mailto:hdawar16@gmail.com",
    },
    {
      platform: "twitch.tv",
      username: "harsh_dawar",
      url: "https://www.twitch.tv/harsh_dawar",
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
