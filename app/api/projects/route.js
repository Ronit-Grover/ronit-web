import { NextResponse } from "next/server"

export const GET = () => {
  const projects = [
    {
      name: "Portfolio",
      description: "My portfolio website",
      url: "https://cli-folio.vercel.app",
      github: "https://github.com/HARSH16DAWAR/cli-folio",
    },
    {
      name: "AWS resume hosting",
      description: "My resume hosted on AWS using S3, CloudFront and Route53",
      url: "https://harsh-resu.me",
      github: "https://github.com/HARSH16DAWAR/CLOUD/tree/main/Resume_Hosting",
    },
    {
      name: "Expense Tracker",
      description: "A simple expense tracker app built using ReactJS",
      url: "https://github.com/HARSH16DAWAR",
      github: "https://google.com"
    },
  ]

  return NextResponse.json(projects)
}
