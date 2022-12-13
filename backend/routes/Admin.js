const express = require('express')
const { QueryTypes } = require('sequelize');
const router = express.Router()
const { Admin, Users, sequelize } = require("../models")

router.get("/", async (req, res) => {
    let offset = req.query.offset || 0
    let limit = req.query.limit ? ((req.query.limit > 0 && !isNaN(req.query.limit)) ? req.query.limit : 0) : 20

    const allreport = await sequelize.query(
        "SELECT A.*, US.FirstName 'NomSus', U.FirstName 'NomUser'\
        FROM `Admins` A \
        JOIN `Users` US ON US.id = A.SuspectId \
        JOIN `Users` U ON U.id = A.UserId \
        ORDER BY A.updatedAt DESC \
        LIMIT "+ limit + " OFFSET " + offset
        , { type: QueryTypes.SELECT });
    res.json(allreport)
})

router.get("/findtype", async (req, res) => {
    let offset = req.query.offset || 0
    let limit = req.query.limit ? ((req.query.limit > 0 && !isNaN(req.query.limit)) ? req.query.limit : 0) : 20
    const allreport = await sequelize.query("SELECT A.*, US.FirstName 'NomSus', U.FirstName 'NomUser'\
    FROM `Admins` A \
    JOIN `Users` US ON US.id = A.SuspectId \
    JOIN `Users` U ON U.id = A.UserId \
    WHERE A.Type LIKE '%"+ req.query.type + "%' \
    ORDER BY A.updatedAt DESC \
    LIMIT "+ limit + " OFFSET " + offset
        , { type: QueryTypes.SELECT })
    res.json(allreport)
})

router.post("/", async (req, res) => {
    try {
        Admin.create({
            Type: req.body.Type,
            Description: req.body.Description,
            SuspectId: req.body.SuspectId,
            UserId: req.body.UserId
        })
            .then(() => {
                res.json(200)
            })

    } catch (error) { // en cas d'erreur
        res.status(500).send(error);
    }
});

module.exports = router