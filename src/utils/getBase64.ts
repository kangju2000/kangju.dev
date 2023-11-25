import fs from 'node:fs/promises'
import { join } from 'path'
import { getPlaiceholder } from 'plaiceholder'

const getBase64 = async (imgName: string) => {
  const file = await fs.readFile(join(process.cwd(), `public${imgName}`))
  const { base64 } = await getPlaiceholder(file)

  return base64 as `data:image/${string}`
}

export default getBase64
