var APP_NAME = 'aurory-web-backend'

module.exports = {
    apps : [{
        name: APP_NAME,
        script: 'yarn run initprod',
        error: '/var/log/pm2/' + APP_NAME + '/err.log',
        output: '/var/log/pm2/' + APP_NAME + '/out.log',
    }]
}
