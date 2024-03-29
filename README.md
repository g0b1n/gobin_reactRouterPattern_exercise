# **React Router Patterns**

## **Part 1: React Router Dog Finder**

- */dogs* is the homepage and shows all three dogs
- Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to */dogs/whiskey*.
- every other endpoint not listed should redirect you to */dogs.*

## **Part 2: React Router Color Factory**

### **User Stories**

1. As a user, I can go to */colors* to see a list of all available colors.
2. As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.
    
    (The route here should be */colors/:color* )
    
3. As a user, I can click on a button to show a form that will let me add a new color.
    
    Note that you can give an *input* a type of *color* if you’re trying to select a color. (The route here should be */colors/new*)
    
4. As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
5. As a user, if I try to navigate to a color page that does not exist (eg, */colors/nope*), I am redirected to the colors index page.
6. As a user, if I try to navigate to an invalid url (eg, */this-is-not-valid*), I am redirected to the colors index page.
