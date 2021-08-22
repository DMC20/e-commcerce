const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [Product]
  })
  .then((tag) => {
    console.log('reponse from findAll', tag)
    res.json(tag)})
  .catch((err) => {res.status(500).json(err)})
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id 
    },
    attributes: ['id', 'tag_name'],
    include: [Product]
  })
  .then((tag) => {
    console.log('response from findOne', tag)
    res.json(tag)})
  .catch((err) => {res.status(500).json(err)})
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((tag) => {
    console.log('response from findOne', tag)
    res.json(tag)})
  .catch((err) => {res.status(500).json(err)})
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id 
    }
  })
  .then((categories) => {
    console.log('reponse from update', categories)
    res.json(categories)})
  .catch((err) => {res.status(500).json(err)})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((categories) => {
    console.log('Item deleted', categories)
    res.json(categories)})
  .catch((err) => {res.status(500).json(err)})
});

module.exports = router;
