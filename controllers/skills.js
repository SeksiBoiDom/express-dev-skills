const Skill = require("../models/skills");
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
  }

function index(req, res) {
    res.render('skills/index',{
        skills: Skill.getAll(), 
        title: 'All Skills'  
    });
}

function show(req, res) {
    res.render ("skills/show", {
        skill: Skill.getOne(req.params.id),
        title: 'Skills Details' 
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skills' });
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }