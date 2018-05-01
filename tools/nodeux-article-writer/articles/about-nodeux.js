function execute() {

    const
        snippetReader = require('../helpers/snippet-reader'),
        articleWriter = require('../helpers/article-writer');

    const myArticle = {
        main: {
            id: "about-nodeux",
            date: "2018-04-30",
            title: "About Nodeux Blog Engine",
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
                text: "1. Clone it."
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "bash",
                code: "    git clone https://github.com/nodeux/blog-engine.git"

            }
        },
        {
            template: "basic-template",
            fields: {
                subtitle: "",
                text: "2. Install dependencies and run dev web server."
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "bash",
                code: "    npm install -g nodemon & npm i & npm run dev"
            }
        },
        {
            template: "basic-template",
            fields: {
                subtitle: "",
                text: "3. Now, fire up your favorite browser and point it to http://localhost:3000 , then edit the next file tools/nodeux-article-writer/articles/about-nodeux.js (to edit this article) and run the next command to rebuild it."
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "bash",
                code: "    npm run toolbelt/writer"
            }
        },
        {
            template: "basic-template",
            fields: {
                subtitle: "",
                text: "4. Refresh the webpage and your changes should be applied. Then, add a consistency test to avoid corrupting your blog post in the future. In order to do so, just run the next command."
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "bash",
                code: "    cp tmp/about-nodeux.json test/lib/expected-articles/about-nodeux.json"
            }
        },
        {
            template: "basic-template",
            fields: {
                subtitle: "",
                text: "5. Now, verify that everything works. Enjoy!"
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "bash",
                code: "    npm test"
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