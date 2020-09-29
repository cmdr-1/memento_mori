<h1>Related Links</h1>
Extension Link: https://addons.mozilla.org/en-US/firefox/addon/memento_mori/

Short Video Presentation: https://www.youtube.com/watch?v=3s35WVbIEsM&feature=youtu.be


<h3>Memento Mori</h3>  


> "*Memento* is 'to remember, to bear in mind', usually serving as a warning: "remember!" *Mori* is the present infinitive of the deponent verb morior 'to die'. In other words, "remember death" or "remember that you die"

Simply put, [*Memento Mori*](https://en.wikipedia.org/wiki/Memento_mori) is a new tab extension that aims to remind the user of the brevity of life. In Version 1.0, the setup consists of entering in your birthday. After being validated, the birthdate is stored in a variable in Firefox’s `localStorage`. After that, any time a new tab is opened, a countdown is shown. This countdown shows you how much time you have left before you die. 

This countdown is created by using JavasScript to determine the current date and then find the difference between the entered date of birth; the value is then subtracted from 72 years. Why 72? 72 years is the average [life expectancy](https://www.who.int/gho/mortality_burden_disease/life_tables/situation_trends_text/en/) of a human according to the World Health Organization. 


<h1>Background</h1>
This Firefox extension was developed as the final project for [CS50x - Intro to Computer Science](https://cs50.harvard.edu/x/2020/project/).

The instructions for this final project were relatively vague:
“The final project is your opportunity to take your newfound savvy with programming out for a spin and develop your very own piece of software. So long as your project draws upon this course’s lessons, the nature of your project is entirely up to you. You may implement your project in any language(s)... All that we ask is that you build something of interest to you, that you solve an actual problem, that you impact your community, or that you change the world. Strive to create something that outlives this course.” 

The original inspiration for this extension came from a comment I saw online about a Chrome extension that changes New Tabs to show your age, the global population or a countdown to a certain date. The name of the extension is [Morality](https://chrome.google.com/webstore/detail/mortality-new-tab/eeedcpdcehnikgkhbobmkjcipjhlbmpn). Most Chrome extensions have a version for Firefox, or at least something similar, but I wasn’t able to find one, so I thought that maybe at this point, a basic Firefox extension was within my skill set. 

I found out the hard way that it wasn’t as easy as I thought it was going to be. I went through the basic documentation for Firefox extensions and worked through a few examples before even beginning to tackle this project. It took a lot of research, asking a lot of questions in Discord communities and on StackOverflow, I was able to slap together a working project. This is actually my first entirely undirected piece of code developed, so it’s a big step for me. Now, without further ado, my first Firefox extension:


[Memento Mori](https://imgur.com/a/FPfpnTD)

<h3>Development Process</h3>

Most of the work done for this app was done in the JavaScript file. Initially, I had used script tags in the HTML file to check whether or not a birthdate had been saved to the browser’s `localStorage` and then render HTML elements based on the outcome. I found out when trying to test my extension in Firefox (using [`web-ext run`](https://github.com/mozilla/web-ext)) that my HTML wasn’t rendering at all. Through some digging, I eventually discovered that web extensions don’t like `<script>` tags in their HTML files, and would just silently fail any code inside the tags. In general, security is a lot stricter with extensions. 

The solution to this problem was to obviously remove any `<script>` tags and move the code inside of them into the JavaScript file. To do this, I put the code into a function called `main()` and had it run as soon as the JS file was loaded.

Buttons that relied on JavaScript event listeners in the HTML also had to be changed, so instead, I set up event listeners that activated after the DOM was loaded and fired when their associated buttons are clicked. 

Another recurring issue I found when trying to text my extension was that the JQuery symbol was considered `undefined`. I figured that this was also associated with web extensions security standards. After trying to figure out how to fix the error with JQuery, I decided to instead to just change my code to use only native JavaScript and avoid the the dependance on JQuery all together. That solved my issue and wasn't as much effort as I thought it was going to be. 

<h3>Future Goals</h3>

First of all, I’d like to add some sort of visual representation of the amount of time left, maybe in the form of an hourglass, but in a way to ensure the extension retains a minimal aesthetic. 

Additionally, the method I used to determine the countdown of the end of your lives is a dirty calculation, and for a future iteration of this extension I’d like to make an API call to fetch the average life expectancy of a person in the country from which the user is using the extension. I'm not exactly at the point where I develop this feature without a lot of time invested, so I'm putting it off until I'm a bit more savvy. Life expectancy can vary as as much as 30 years depending on geographic location, and even in the same region, the life expectancy between males and females can vary by half a decade. If I had to brainstorm right now about what steps I'd need to take to implement a more unique, accurate coundtown for each user, it would go like this: 

-    browsers are actually really cool in that they collect a lot of information on their own, so a lot of it is just figuring out how to call that info
-    stuff like the country of the user should be relatively easy to get using browser API calls, and determining gender would be just a drop down in addition to the current set-up
-    the hard part is going to be finding an API of the average life expectancies, but realistically all that data already exists and I could probably create my own database for my extension to use if there isn't an existing API for it
-    then I'd a query to match the gender and country of origin of the user to a line in the database and store the year value in a variable. 
-    Finally, I'd substitute the 72 years of life expectancy value for the variable mentioned above, and that should be it

Now that I've written it out, it doesn't seem that bad.

Extension Link: https://addons.mozilla.org/en-US/firefox/addon/memento_mori/
