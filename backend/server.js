import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const LOG_FILE = path.join(__dirname, 'contact-submissions.json')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

// Only build the mail transporter if credentials are present.
// Without them, submissions are still saved to a local JSON file so nothing is lost.
let transporter = null
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

function saveSubmission(entry) {
  let existing = []
  if (fs.existsSync(LOG_FILE)) {
    try {
      existing = JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'))
    } catch {
      existing = []
    }
  }
  existing.push(entry)
  fs.writeFileSync(LOG_FILE, JSON.stringify(existing, null, 2))
}

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are all required.' })
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() }
  saveSubmission(entry)

  if (transporter) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        replyTo: email,
        subject: `Portfolio contact from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      })
    } catch (err) {
      console.error('Email send failed, but submission was saved:', err.message)
      // Don't fail the request just because email delivery failed — the message is saved.
    }
  } else {
    console.log('EMAIL_USER / EMAIL_PASS not set — skipping email send. Submission saved to contact-submissions.json.')
  }

  res.status(200).json({ success: true })
})

app.get('/api/health', (req, res) => res.json({ ok: true }))

app.listen(PORT, () => {
  console.log(`Portfolio backend running on http://localhost:${PORT}`)
})
