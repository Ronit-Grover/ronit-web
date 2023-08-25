import { NextResponse } from "next/server"

export const GET = () => {
  const projects = [
    {
      name: "Portfolio",
      description: "My portfolio website",
      url: "https://www.google.com",
      github: "https://github.com/HARSH16DAWAR",
    },
    {
      name: "AWS resume hosting",
      description: "My resume hosted on AWS using S3, CloudFront and Route53",
      url: "https://harsh-resu.me",
      github: "https://github.com/HARSH16DAWAR",
    },
    {
      name: "Expense Tracker",
      description: "A simple expense tracker app built using ReactJS",
      url: "https://github.com/HARSH16DAWAR",
    },
  ]

  return NextResponse.json(projects)
}
