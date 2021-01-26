import { AppState } from '../AppState'
import { api } from './AxiosService'

class BoardService {
  async getBoards(creatorId) {
    const res = await api.get('api/boards/' + creatorId)
    AppState.boards = res.data
  }
}
export const boardService = new BoardService()
