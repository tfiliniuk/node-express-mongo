const logger = (req, res, next) => {
  req.hello = 'Hello';
  console.log('Middlewaere run');
  next();
};

module.exports = logger;
