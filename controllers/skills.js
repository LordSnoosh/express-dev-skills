const Skill = require('../models/skills');
module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};
function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}
function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', { skill });
}
function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}
function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}
function newSkill(req, res) {
  res.render('skills/new');
}
function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id)
  });
}
function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll()
  });
}