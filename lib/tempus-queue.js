import Tempus from 'tempus'

const readQueue = []
const writeQueue = []

Tempus.add(
  () => {
    // Process all reads first
    for (const fn of readQueue) fn()
    readQueue.length = 0

    // Then process all writes
    for (const fn of writeQueue) fn()
    writeQueue.length = 0
  },
  { priority: 1000 },
)

function measure(fn) {
  return new Promise((resolve) => {
    readQueue.push(() => resolve(fn()))
  })
}

function mutate(fn) {
  return new Promise((resolve) => {
    writeQueue.push(() => resolve(fn()))
  })
}

const TempusQueue = { measure, mutate }

export default TempusQueue
