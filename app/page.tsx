import React from 'react'
import client from '../tina/__generated__/client'

const getData = async () => {
  return await client.queries.page({ relativePath: 'home.md' });
};

export default async function Page() {
    const { data: { page } } = await getData();
    return <>
      <h1>{page.title}</h1>
    </>;
  }