# Project1

## Getting started

**First I created the gitLab project, created working-branch from main and invited the professors to review the code.**

**Then I cloned the project on my Desktop, started working on the created branch and then continously pushed the changes. In the end I merged all the changes in main**

```
git clone https://git.brainster.co/Lutmira.Peci-3/project1.git
git pull
git checkout working-branch
git add .
git commit -m "commit message here"
git push -u origin working-branch
____________________________

git checkout main
git pull
git merge working-branch
```

## Name

**TechForward 2024**

## Description

**The TechForward 2024 is designed to bring together professionals from across the globe to discuss the latest technology trends, innovations, and challenges in the industry. Founded in 2010, our annual conference has grown into one of the most anticipated events in our field. It is a site that can be accesed from phones and laptops.**

## Installation

**It can be run in VS Code with Fn+F5 and be careful to have installed SaSS Compiler. Also the configurations need to be this way:**

```
"liveSassCompile.settings.includeItems": [],
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/",
      "savePathReplacementPairs": null
    }
  ],
```

## Authors and acknowledgment

**Lutmira Peci**

## License

**TechForward 2024 © All rights reserved**

## Project Overview

**Homepage**: This is the main page and has these sections:

1. **Header**: Where the user navigates to the pages:

- _Home_
- _About_
- _Schedule_
- _Speakers_
- _Register_
- _Contact Us_

2. **Banner**: Has a background image with an intro text and a CTA that takes you to the Registration page.
3. **Why Attend**: Has a paragraph that describes shortly the event.
4. **Speakers**: Has information about the 3 main event speakers.
5. **Event Statistics**: Has information about the previous events.
6. **Testimonials**: Shows the opinion of 3 previous attenders.
7. **Video Teaser**: Shows a short video of previous events.
8. **Countdown**: Shows the days, hours, minutes, seconds left to the event day. If you change the date at the countdown.js script then it will show a short text saying that the event is over, the CTA buttons will be dissabled and the _register_ links at header and footer will be invisible.
9. **Register now CTA**: Has a CTA button that invites the user to go to the registration page.
10. **Footer**: Has the Social Media links and navigation links. Also the copyright and a Back link that takes the user to the beginning of the page.

- **About Page**: This is the ABOUT page and has these sections:

  1. **Header**: Where the user navigates back to the homepage or to the other pages.
  2. **Intro section**: Here are all the conference informations.
  3. **Organisers Section**: Here are the informations about the event organisers.
  4. **Gallery Section**: Here are some of the previous events photos.
  5. **Footer**: Has the Social Media links and navigation links. Also the copyright and a Back link that takes the user to the beginning of the page.

- **Schedule Page**: This is the SCHEDULE page and has these sections:

1. **Header**: Where the user navigates back to the homepage or to the other pages.
2. **Main section**: Here the visitor can see all the conference detailed schedule for both days.
3. **Footer**: Has the Social Media links and navigation links. Also the copyright and a Back link that takes the user to the beginning of the page.

- **Speakers Page**: This is the SPEAKERS page and has these sections:

1. **Header**: Where the user navigates back to the homepage or to the other pages.
2. **Main section**: Here are all the speakers cards and their detailed informations.
3. **Footer**: Has the Social Media links and navigation links. Also the copyright and a Back link that takes the user to the beginning of the page.

- **Registration Page**: This is the REGISTRATION page and has these sections:

1. **Header**: Where the user navigates back to the homepage or to the other pages.
2. **Main section**: Here is the registration form which is dynamic and warns the user if he leaves empty a required input field.
3. **Footer**: Has the Social Media links and navigation links. Also the copyright and a Back link that takes the user to the beginning of the page.

- **Contact Us Page**: This is the CONTACT US page and has these sections:

1. **Header**: Where the user navigates back to the homepage or to the other pages.
2. **Location section**: Here are all the main contact infos about the conference, such as: location, email, phone number, etc.
3. **Contact Us Section**: Here is the Contact form which is dynamic and warns the user if he leaves empty a required input field.
4. **Footer**: Has the Social Media links and navigation links. Also the copyright and a Back link that takes the user to the beginning of the page.

- **Extra functionalities implemented**
  1. **Counting Down**
  2. **Navigation**
  3. **Form Validation**
