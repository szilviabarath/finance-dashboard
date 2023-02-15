const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   publicPath: process.env.NODE_ENV === "production" ? "szilviabarath.github.io/finance-dashboard" : "/",
})



