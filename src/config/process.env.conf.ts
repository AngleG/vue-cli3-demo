// 该环境配置文件用于封装接口时使用
export default {
  dev: {
    NODE_ENV: 'development',
    BASE_API_URL: 'http://188.188....',
  },
  test: {
    NODE_ENV: 'test',
    BASE_API_URL: 'http://test...',
  },
  prod: {
    NODE_ENV: 'production',
    BASE_API_URL: 'http://www....',
  },
}
