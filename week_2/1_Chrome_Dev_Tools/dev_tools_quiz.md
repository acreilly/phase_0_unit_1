#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS
   -Go to the elements tab, click on the html that needs to be fixed in the main panel and on the side panel is the css.
  * Javascript Debugging
  -Sources panel: click on the javascript needing debugging, use pause on caught exception to find issue.
  * Performance Optimization 
  -Networks panel can help you find where issues are such as large files or what slows down the site.

* What's the quick key for your OS to spawn the Dev Tools inspector?
-shift command I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  - #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
http://min.us/i/6PxlqF2qeLBM
* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
It is a background image placed within the p element in css. the -9999 text indent takes the original text off the page and the background:url() property insets the image in its place.
* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  - 92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png is a total of 316 KB
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  - I went to network tab, clicked size and compared this image to the rest and it was a total of 316 KB
  
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
 - The main thing that needs to be fixed it to reduce the images they listed by 885.9KiB, which is a 39% reduction.
