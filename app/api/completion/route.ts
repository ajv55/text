import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: NextRequest) {

  const { prompt } = await req.json();

  const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    max_tokens: 2000,
    stream: true, 
    prompt
  })

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream)
  
}