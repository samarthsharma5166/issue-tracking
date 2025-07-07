import { prisma } from "@/utils/DB";
import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return new Response(JSON.stringify(validation.error.format()), {
      status: 400,
    });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: validation.data.title,
      description: validation.data.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
