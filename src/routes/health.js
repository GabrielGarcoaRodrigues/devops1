const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const healthCheck = {
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'devops-demo-app',
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    checks: {
      memory: checkMemory(),
      disk: 'OK', // Simplified
      database: 'OK' // Simplified
    }
  };

  res.status(200).json(healthCheck);
});

function checkMemory() {
  const usage = process.memoryUsage();
  const totalMB = Math.round(usage.heapTotal / 1024 / 1024);
  const usedMB = Math.round(usage.heapUsed / 1024 / 1024);
  
  return {
    status: usedMB < 100 ? 'OK' : 'WARNING',
    total: `${totalMB}MB`,
    used: `${usedMB}MB`,
    free: `${totalMB - usedMB}MB`
  };
}

module.exports = router;
