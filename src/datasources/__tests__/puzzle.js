const puzzleAPI = require('../puzzle')

/** there are mock Puzzles at the bottom of this file.
 * 1 mock for api response
 * 1 mock for the shape of the puzzle post reducer
 */

const mocks = {
  get: jest.fn()
}

const ds = new puzzleAPI()
ds.get = mocks.get

describe('[PuzzleAPI.puzzleReducer]', () => {
  it('propery transforms puzzle', () => {
    expect(ds.puzzleReducer(mockPuzzleResponse)).toEqual(mockPuzzle)
  })
})

describe('[PuzzleAPI.getAllPuzzles]', () => {
  it('looks up puzzles from the api', async () => {
    mocks.get.mockReturnValueOnce({ data: [mockPuzzleResponse] })
    const res = await ds.getAllPuzzles()

    expect(res).toEqual([mockPuzzle])
    expect(mocks.get).toBeCalledWith('puzzles')
  })
})

describe('[PuzzleAPI.getPuzzleById]', () => {
  it('should lookup a single puzzle from the api by id', async () => {
    mocks.get.mockReturnValueOnce({ data: mockPuzzleResponse })
    const res = await ds.getPuzzleById({ puzzleId: 1 })

    expect(res).toEqual(mockPuzzle)
    expect(mocks.get).toBeCalledWith('puzzles/1')
  })
})

const mockPuzzleResponse = {
  board: {
    rows: [['r', 'o', 'w', ''], ['', 'u', 'h']]
  },
  created_at: '2018-12-09T14:40:41.730938-06:00',
  id: 1,
  name: 'test',
  updated_at: null
}

const mockPuzzle = {
  id: 1,
  name: 'test',
  board: {
    rows: [['r', 'o', 'w', ''], ['', 'u', 'h']]
  },
  updatedAt: null,
  createdAt: '2018-12-09T14:40:41.730938-06:00'
}
