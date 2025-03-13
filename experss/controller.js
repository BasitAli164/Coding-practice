export const usernameController = (req, res) => {
  const username = req.params.username;
  res.send(`Welcom ${username}`);
};

export const searchController=(req,res)=>{
    const keyword=req.query.keyword
    res.send(`Searching of ${keyword}`)
}