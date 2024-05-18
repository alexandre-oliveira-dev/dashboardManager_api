module.exports = {
  apps : [{
    name: 'dashboardManager',
    script: './src/main.ts',
    instances: 1,
    cron_restart: '0 0 * * *'
  }]
}