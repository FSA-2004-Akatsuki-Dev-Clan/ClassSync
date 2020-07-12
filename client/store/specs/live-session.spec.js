import {expect} from 'chai'
import {addSessionData, resetSessionData} from '../liveSession'

describe('Live-Session action creators', () => {
  describe('addSessionData', () => {
    it('returns properly formatted action', () => {
      const data = {
        clickCount: 0,
        faceCount: 4,
        faceDetects: 4,
        faceScore: 100,
        firstName: 'Omar',
        id: 2,
        keyCount: 0,
        lastName: 'Martin',
        time: 26575283,
        times: [],
        wordCount: 3
      }

      expect(addSessionData(data)).to.be.deep.equal({
        type: 'ADD_SESSION_DATA',
        data
      })
    })
  })

  describe('resetSessionData', () => {
    it('returns properly formatted action', () => {
      expect(resetSessionData()).to.be.deep.equal({
        type: 'RESET_SESSION_DATA'
      })
    })
  })
})
