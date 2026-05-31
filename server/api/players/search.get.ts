export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const text = String(query.text || '')

  if (text.length < 3) {
    return []
  }

  const response = await $fetch('https://tennis.tppwb.be/MyAFT/Players/GetPlayersAutocomplete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: new URLSearchParams({
      text
    })
  })

  return response
})