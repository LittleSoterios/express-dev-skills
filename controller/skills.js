const Skill = require('../models/skill')
const { response } = require('../server')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    })
}

function show(req, res){
    res.render(`skills/show`, {
        skill: Skill.getOne(req.params.id),
        id: req.params.id,
        title: "Skill"
    })
}

function newSkill(req, res){
    res.render('skills/new', {
        title: 'New Skill'
    })
}

function create(req, res){
    console.log(req.body.skill)
    Skill.create(req.body.skill)
    res.redirect('/skills')
}

function deleteSkill(req, res){
    Skill.deleteSkill(req.params.id)
    res.redirect('/skills')
}

function edit(req, res){
    const skill = Skill.getOne(req.params.id)
    res.render('skills/edit',{
        title: 'Edit ' + skill,
        id : req.params.id,
        skill
    })
}

function update(req, res){
    Skill.update(req.body.skill, req.params.id)
    res.redirect('/skills')
}

