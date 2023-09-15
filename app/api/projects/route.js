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
      name: "Din",
      description: "A WYSIWYG journaling app with AI based mood analysis and tracking",
      github: "https://github.com/HARSH16DAWAR/din",
    },
    {
      name: "TextGenie",
      description: "A text generation model trained on classic literature by Melviille, Plato and Eliot" ,
      github: "https://github.com/HARSH16DAWAR/TextGenie",
    }
  ]

  return NextResponse.json(projects)
}
