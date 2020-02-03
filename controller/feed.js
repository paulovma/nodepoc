exports.getPosts = (req, res, next) => {
    res
        .status(200)
        .json(
            {posts: [{title: 'Title', content: 'Content'}]}
        );
}

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    console.log(title, content);
}