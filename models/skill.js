const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "Express.js",
    "Git"
]

module.exports = {
    getAll,
    get
}

function getAll(){
    return skills
}
function get(id){
    return skills[id]
}