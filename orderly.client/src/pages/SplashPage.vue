<template>
  <div class="splash flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-primary">
    <h1 class="display-1 text-dark customFont">
      Order<mark class="bg-dark text-primary">ly</mark>
    </h1>
    <h1 class="my-5 text-light p-3 rounded d-flex align-items-center">
      <div v-if="state.user.isAuthenticated">
        <button class="btn-dark text-primary customFont p-2" @click="getBoards()">
          Get Started
        </button>
      </div>
      <div>
      </div>
    </h1>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { boardService } from '../services/BoardService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Splash',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      user: computed(() => AppState.user),
      boards: computed(() => AppState.boards)
    })
    return {
      state,
      async getBoards() {
        try {
          const id = await boardService.getBoards(route.params.id)
          router.push({ name: 'HomePage', params: { id } })
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
.customFont{
  font-family: 'Raleway', sans-serif;
}
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
