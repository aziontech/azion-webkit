export const submit = async (formData, email) => {
  const { fetchLink, uri, pageName, acceptanceTermText } = formData

  const response = await fetch(fetchLink, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fields: [
        {
          objectTypeId: '0-1',
          name: 'email',
          value: email
        }
      ],
      context: {
        pageUri: `www.azion.com/${uri}`,
        pageName: `${pageName}`
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: `${acceptanceTermText}`
        }
      }
    })
  })

  return response
}