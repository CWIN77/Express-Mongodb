module.exports = {
  apps: [{
    name: 'development',
    script: './index.js',
    instances: 1,
    autorestart: false,
    watch: [
      "src",
    ],
    ignore_watch: [
      "node_modules",
      ".yarn"
    ],
    env: {
      PORT: 9000, //Express PORT
      // MONGODB_URI: "TestURI",
      // NODE_ENV: 'development',
    },
  },
  {
    name: 'production',
    script: './index.js',
    instances: -1, // 클러스터 모드
    exec_mode: "cluster",
    autorestart: false,
    watch: false,
    env: {
      PORT: 9000,
      // MONGODB_URI: "TestURI",
      // NODE_ENV: 'production',
    },
  }]
};