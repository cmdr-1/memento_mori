This Firefox extension was developed as the final project for [CS50x - Intro to Computer Science](https://cs50.harvard.edu/x/2020/project/). 

The instructions for this final project were relatively vague:
“The final project is your opportunity to take your newfound savvy with programming out for a spin and develop your very own piece of software. So long as your project draws upon this course’s lessons, the nature of your project is entirely up to you. You may implement your project in any language(s)... All that we ask is that you build something of interest to you, that you solve an actual problem, that you impact your community, or that you change the world. Strive to create something that outlives this course.” 

The original inspiration for this extension came from a comment I saw online about a Chrome extension that changes New Tabs to show your age, the global population or a countdown to a certain date. The name of the extension is [Morality](https://chrome.google.com/webstore/detail/mortality-new-tab/eeedcpdcehnikgkhbobmkjcipjhlbmpn). Most Chrome extensions have a version for Firefox, or at least something similar, but I wasn’t able to find one, so I thought that maybe at this point, a basic Firefox extension was within my skill set at this point. 

I found out the hard way that it wasn’t as easy as I thought it was going to be. I went through the basic documentation for Firefox extensions and worked through a few examples before even beginning to tackle this project. It took a lot of research, asking a lot of questions in Discord communities and on StackOverflow, I was able to slap together a working project. This is actually my first entirely undirected piece of code developed, so it’s a big step for me. Now, without further ado, my first Firefox extension:


<h2>Memento Mori</h2>  


> "*Memento* is 'to remember, to bear in mind', usually serving as a warning: "remember!" *Mori* is the present infinitive of the deponent verb morior 'to die'. In other words, "remember death" or "remember that you die"

Simply put, [*Memento Mori*](https://en.wikipedia.org/wiki/Memento_mori) is a new tab extension that aims to remind the user of the brevity of life. In Version 1.0, the setup consists of entering in your birthday. After being validated, the birthdate is stored in a variable in Firefox’s `localStorage`. After that, any time a new tab is opened, a countdown is shown. This countdown shows you how much time you have left before you die. 

This countdown is created by using JavasScript to determine the current date and then find the difference between the entered date of birth; the value is then subtracted from 72 years. Why 72? 72 years is the average [life expectancy](https://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends_text/en/) of a human according to the World Health Organization. 

This is a dirty calculation, and for a future iteration of this extension I’d like to make an API call to fetch the average life expectancy of a person in the country from which the user is using the extension.

Additionally, I’d like to add some sort of visual representation of the amount of time left, maybe in the form of an hourglass, but in a way to ensure the extension retains a minimal aesthetic. 

