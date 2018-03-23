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
                subtitle: "Motivation",
                text: "The motivation behind Nodeux's Blog Engine is quite simple, a tool to publish technical articles or thoughts for programmers. Let me explain. If I have to say what is the tool that as a programmer I use every single day it would be a text editor. Now, as a programmer I have some other skills that allows me to optimize a lot of tasks I do everyday. Last but not least, what if I want to test out my knowledge in real life? e.g. Let's say that I've just learned how to use Vue.js, right? What if I want to test it in a real environment? Exactly, it wouldn't make any sense to create proof of concepts, instead of really doing it."
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
    ];

    mySections.forEach((s) => {
        myArticle.main.content.sections.push(s);
    });

    const myArticleObject = articleWriter.createArticle(myArticle);
    myArticleObject.publishTemp();
    myArticleObject.publish();

}

module.exports = {execute};