function execute() {

    const
        snippetReader = require('../helpers/snippet-reader'),
        articleWriter = require('../helpers/article-writer');

    const myArticle = {
        main: {
            id: "snippets-in-java",
            date: "2018-07-04",
            title: "Useful Snippets in Java",
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
                subtitle: "Singleton",
                text: "Singleton in Java, lazily loaded and thread safe."
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "java",
                code: snippetReader.setSnippet('singleton-in-java.java').read()
            }
        },
        {
            template: "basic-template",
            fields: {
                subtitle: "Builder",
                text: "Builder in Java, Sandwich Object Example."
            }
        },
        {
            template: "snippet-template",
            fields: {
                lang: "java",
                code: snippetReader.setSnippet('builder-in-java.java').read()
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