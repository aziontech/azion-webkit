export const hbspPostHandler = async (postURL, body) => {
  const response = await fetch(postURL, {
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return response
}
