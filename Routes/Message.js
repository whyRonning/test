const {Router} = require("express");
const router = Router();
const config = require("config");
const jwt = require("jsonwebtoken")
const users = [
    {
        login: "dima",
        password: "dima1",
        carts: [{name: "12", description: "23"}, {name: "34", description: "45"}]
    }, {
        login: "dima1", password: "dima2",
        carts: [{name: "56", description: "78"}, {name: "910", description: "231"}]
    }, {
        login: "dima3", password: "dima4",
        carts: [{name: "das", description: "12das"}, {name: "ddsa", description: "dggas"}]
    }
]

router.get(
    "/userCarts",
    async (req, res) => {
        try {
           const userCarts=users.find(e=>(e.login===req.query.user))
            res.status(200).json({carts:userCarts.carts});
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Что-то пошло не так,попробуйте снова"});
        }
    }
);
router.get(
    "/users",
    async (req, res) => {
        try {
            const usersNames=users.map(e=>e.login)
            res.status(200).json({users:usersNames});
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Что-то пошло не так,попробуйте снова"});
        }
    }
);
router.post(
    "/addUserCart",
    async (req, res) => {
        try {
            const userIndex=users.findIndex((e)=>e.login===req.body.user)
            users[userIndex].carts.push(req.body.cart)
            res.status(200).json({message: "ok"})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Что-то пошло не так,попробуйте снова"});
        }
    }
);
router.post(
    "/auth",
    async (req, res) => {
        try {

            const user = users.find((e) => {
                return e.login === req.body.login
            })
            if (user) {
                if (user.password === req.body.password) {
                    const token = await jwt.sign({user: req.body.user, password: req.body.password}, "21", "", "")
                    res.json({token})
                } else {
                    res.status(400).json({message: "Неверен логин или пароль"})
                }

            } else {
                res.status(400).json({message: "Такого пользователя не существует"})
            }

        } catch (e) {
            console.log(e)
            res.status(500).json({message: "Что-то пошло не так,попробуйте снова"});
        }
    }
);
module.exports = router;
