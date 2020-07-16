const generator = num => {
  const seedArr = []
  for (let i = 0; i < num; i++) {
    const faceCount = Math.floor(Math.random() * (110 - 50 + 1) + 50)
    const wordCount = Math.floor(Math.random() * (450 - 100 + 1) + 100)
    const clickCount = Math.floor(Math.random() * (125 - 20 + 1) + 20)
    const keyCount = Math.floor(Math.random() * (350 - 100) + 100)
    let studentInstance = {
      studentId: i + 1,
      sessionId: 3,
      faceCount,
      faceDetects: 125,
      wordCount,
      clickCount,
      keyCount
    }
    seedArr.push(studentInstance)
  }
  return seedArr
}
generator(30)
