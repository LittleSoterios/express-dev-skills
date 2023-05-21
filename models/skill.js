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
    getOne,
    create,
    deleteSkill,
    update
}

function getAll(){
    return skills
}
function getOne(id){
    return skills[id]
}

function create(skill){
    skills.push(skill)

}
function deleteSkill(id){
    skills.splice(parseInt(id), 1)
}

function update(skill, id){
    skills[id] = skill
}
