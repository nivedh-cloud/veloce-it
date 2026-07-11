const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const inputDir = path.join(__dirname, '..', 'images')
const outputDir = path.join(__dirname, '..', 'images', 'compressed')

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true })

async function compressFile(file) {
  const inputPath = path.join(inputDir, file)
  const ext = path.extname(file).toLowerCase()
  const name = path.basename(file, ext)
  const outputPath = path.join(outputDir, `${name}-compressed${ext}`)

  try {
    if (ext === '.png') {
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9, adaptiveFiltering: true })
        .toFile(outputPath)
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(inputPath)
        .jpeg({ quality: 75 })
        .toFile(outputPath)
    } else {
      // copy other filetypes
      fs.copyFileSync(inputPath, outputPath)
    }

    const inStat = fs.statSync(inputPath)
    const outStat = fs.statSync(outputPath)
    console.log(`${file}: ${Math.round(inStat.size/1024)}KB -> ${Math.round(outStat.size/1024)}KB`)
  } catch (err) {
    console.error('Failed to process', file, err.message)
  }
}

async function run() {
  const files = fs.readdirSync(inputDir).filter(f => !f.startsWith('.'))
  for (const f of files) {
    await compressFile(f)
  }
}

run().catch(err => { console.error(err); process.exit(1) })
