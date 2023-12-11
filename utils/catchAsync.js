//for asynchronous promisified function involving async await!
// module.exports = (fn) => {
//     return (req, res, next) => {
//       fn(req, res, next).catch(err => next(err));
//     };
//   };


//for non-promisified functions
  module.exports = (fn) => {
    return (req, res, next) => {
      try {
        
        fn(req, res, next)
      } catch (error) {
        
      next(error)
      }
      
    };
  };
 