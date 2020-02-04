const { validationResult } = require('express-validator');

exports.getPosts = (req, res, next) => {
    res
        .status(200)
        .json(
            {posts: [{title: 'Title', content: 'Content'}]}
        );
}

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
console.log(errors);
    if (!errors.isEmpty()) {
        return res.status(422).json(
            {
                message: 'Validation error',
                errors: errors.array()
            }
        )
    }

    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message: 'Success',
        post: {
            _id: new Date().toISOString,
            title: title,
            content: content,
            creator: {name: 'Paulo'},
            createdAt: new Date()
        }
    });
}