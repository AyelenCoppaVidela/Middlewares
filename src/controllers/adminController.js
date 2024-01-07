const adminController = {
    admin: (req, res)=>{
        const user = req.query.user;
        res.send(`Hola admin: ${user}`);
    }
}

module.exports = adminController