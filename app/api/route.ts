import client from '../../tina/__generated__/client'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const { data } = await client.queries.page({ relativePath: `${id}.md` });
   
    return Response.json({ data })
  }