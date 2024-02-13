const getLandingPage = (req, res)=>{
    res.send(
        [
        {firstName: "Olamoyegun", lastName: "Saheed", food: "Jollf-rice"},
        {firstName: "Dev", lastName: "Sedorf", food: "Amala"},
        {firstName: "Akinniyi", lastName: "Damilola", food: "Beans"}
        ]
    )
}

module.exports = {getLandingPage}