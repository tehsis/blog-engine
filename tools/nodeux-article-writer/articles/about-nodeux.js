function execute() {

    const
        snippetReader = require('../helpers/snippet-reader'),
        articleWriter = require('../helpers/article-writer');

    const myArticle = {
        main: {
            id: "about-nodeux",
            date: "2018-03-13",
            title: "About Nodeux Blog Engine (in progress)",
            hidden_home: false,
            content: {
                sections: []
            }
        }
    };

    const mySections = [
            {
                template: "basic-template",
                fields: {
                    subtitle: "Philosophy",
                    text: "Plain and simple, this is a blog for programmers, not regular users. What does that mean? I'm writing code everyday all the time, that means I can optimize how I do things, so why should I use a super sophisticated system with a lot of plugins, databases filled up with tables (or documents), users, security issues, whatsoever if I only want to share some simple tech articles? It just simply doesn't make any sense. So, I created my own blog engine to write posts using the everyday tool of a programmer, plain text editors and coding skills."
                }
            },
            {
                template: "basic-template",
                fields: {
                    subtitle: "Basic Usage",
                    text: "1. Clone it. <br> 2. Install dependencies and run dev web server. <br> 3. Edit this article, rebuild it and see it in action. <br> 4. Add consistency test. <br> 5. Enjoy."
                }
            },
            {
                template: "snippet-template",
                fields: {
                    lang: "bash",
                    code: snippetReader.setSnippet('about-nodeux.sh').read()
                }
            },
            {
                template: "basic-template",
                fields:
                    {
                        subtitle: "To be continued ...",
                        text:
                            "This article is under development, sync up soon."
                    }
            }
        ]
    ;

    mySections.forEach((s) => {
        myArticle.main.content.sections.push(s);
    });

    const myArticleObject = articleWriter.createArticle(myArticle);
    myArticleObject.publishTemp();
    myArticleObject.publish();

}

module.exports = {execute};