# What is Where you at?

I've built this site so I can see how far I am through a book collection or tv series (or season if you prefer).

I like knowing how far I am through somehting and the varying lengths of the Harry Potter novels and Breaking Bad series made that hard to calculate.

I know, some mental maths is a good thing and it's probably more effort to make this site than just work it out, but I'm good with that.

## How does it work?

Choose your "Product", enter the Book/Series and the Chapter/Episode and you'll be told how far through you are, as a fraction and percentage

### What about Chapter/Episode lengths?

I don't care, I watch TV by the episode and read books by the chapter, so it makes no difference to me.

Maybe I could add a switch between them... but then I'd need page counts and episode lengths.

I'm not interested, but this is open source, so submit a PR or fork it. (I mean that, that's not a Good Place reference)

## Contributions

### Data

If anyone wants to contribute to the data, please do, just update the `items.js` file or put in an issue for missing data with the JSON in this format:

```
lowercasetitle: {
        title: "Fancy Title",
        type: "tv/book",
        sections: [
            {
                title: "Chapter Name or Season/Series 1",
                sections: [
                    "Chapter or Episode Title",
                    "Another Chapter or Episode Title",
                ]
            },
            {
                title: "Another Chapter or Season",
                sections: [
                    "Chapter or Episode Title",
                    "Another Chapter or Episode Title",
                ]
            },
        ]
    }
```

### Changes to the app

You're welcome to make some changes to how the app works, but I'm not spending a huge amount of time on this at the momemnt.

Bugs and tweaks are welcome, but I have no road map for this, so no idea where it's going.