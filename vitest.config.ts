import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['2022/Day**/*.ts']
  },
})
