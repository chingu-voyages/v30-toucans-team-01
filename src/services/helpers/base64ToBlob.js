export default async function base64ToBlob(base64Str) {
  return await (await fetch(base64Str)).blob()
}
