const aiservice = require('../services/ai.service');    



module.exports.getRespnse = async (req, res) => {
      const code = req.body.codedata;
      console.log(code);
    //   return "hello"
    if(!code){
        return res.status(400).json({error: "Prompt is required"});
    }
 const response = await aiservice(code);
 res.status(200).send(response);

}
