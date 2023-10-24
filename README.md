# Frontend Mentor - News homepage solution

This is my solution (MrJay's solutions) to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help me to improve my front-end coding skills (and of course yours too!) by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links
- Solution URL: [Github](https://github.com/chungvuiloong/news-landing-page)
- Live Site URL: [Vercel](https://mrjays-news-landing-page.vercel.app/)

## My process
Starting with mobile first approach, I analyse both the designs in mobile and desktop view. In this new landing page, it would be done via flex.

- There are five components (excluding an additional footer component).
    - Nav
    - HeadlineImage
    - Headline
    - NewPost
    - TopThree
    - Footer (this is an additional)
- State 
    - In Nav, the text changes to Soft-red.
    - In Headline, background of button changes to Very-dark-blue.
    - In TopThree, the text colour of header changes to Soft-red.

After building, I noticed the alignment is off with the other components unlike the given design. So I changed my design to be grid and flexbox due its nature of being accurately alignment.

### Built with

- Semantic HTML5 markup
- [TailwindCSS](https://tailwindcss.com/)
- Grid & Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

This project was used so I can better learn to:
- use both grid and flexbox
- add custom css variables to tailwind. I learned how to better code custom variables via tailwind.config.js such as:

```tailwind.config.js
theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '17px',
        lg: '4rem',
        xl: '5rem',
        '2xl': '10rem'
      },
      screens: {
        // Mobile
        'sm': '375px',
        // Desktop
        '2xl': '1440px',
      },
    },
    colors: {
      //  Primary
      'Soft-orange': 'hsl(35, 77%, 62%)',
      'Soft-red': 'hsl(5, 85%, 63%)',

      // Neutral
      'Off-white': 'hsl(36, 100%, 99%)',
      'Grayish-blue': 'hsl(233, 8%, 79%)',
      'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'Very-dark-blue': 'hsl(240, 100%, 5%)',
    },
    screens: {
      // Mobile
      'sm': '375px',
      // Desktop
      '2xl': '1440px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
```

### Continued development

In this challenge, mobile and desktop views are the only given views. I am hoping to develop this further with tablet view as well.

## Author

- Website - [MrJay's Simple Portfolio](https://mrjays-simple-portfolio.vercel.app/)
- Github - [Chung Vui Loong/ Jere](https://github.com/chungvuiloong)
