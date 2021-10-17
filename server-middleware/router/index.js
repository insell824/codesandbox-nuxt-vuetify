import express from 'express'
import moment from 'moment-timezone'
const router = express.Router()

router.get('/health-check', async (req, res, next) => {
  try {
    res.status(200).json({ isSuccess: true, statusText: 'ok.' })
  } catch (err) {
    console.log(err?.message)
    res.status(500).json({ isSuccess: false, statusText: err?.message || 'Unknown Error.' })
  }
})

router.get('/now', async (req, res, next) => {
  try {
    const wait = (milliseconds) => new Promise((r) => setTimeout(r, milliseconds))
    await wait(500)
    const nowText = moment().locale('ja').tz('Asia/Tokyo').format('YYYY/MM/DD(ddd) HH:mm.ssZ(z)')

    res.status(200).json({
      isSuccess: true,
      statusText: `Requested time: ${nowText}`,
    })
  } catch (err) {
    res.status(err?.statusCode || 500).json({
      isSuccess: false,
      statusText: err?.message || 'Unknown Error.',
    })
  }
})

export default router
