const {Router} = require('express')
const router = Router();

router.get('/',(req,res)=>{

    res.json({title: "hellooo"})
});
module.exports = router;