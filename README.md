# Plane-G!

It's a travel planner where you can manage various expenses.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [How to run the code](#How-to-run-the-code)
- [Author](#author)

## Overview

### Screenshot
![ipad air](https://github.com/alexandreSouza31/plane-G/assets/112407769/55487125-a96a-4efd-aa53-babf538a2ea8)

![s20 ultra](https://github.com/alexandreSouza31/plane-G/assets/112407769/397335ff-eb30-4369-9da7-a581c84cf099)


![s20 ultra](https://github.com/alexandreSouza31/plane-G/assets/112407769/27dae212-ea8c-4305-8d77-f3ff556830f8)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- mobile first
- JSX
- ReactJS


### What I learned

```jsx
//dynamic url and link name
function LinkButton({ to, text }) {//to-where does the link go. text- will change the text based on where I'm going to use it.
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}
export default LinkButton


//props
import styles from "../layoult/Container.module.css";

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    //this means that the child elements will be wrapped inside the Container.
    //dynamic class- I put the class that comes from props (customClass). It's optional, use it when needed.
}

export default Container

//dynamic values

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.input_container}>
            <label htmlFor={name}>{text}</label>
            <input type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}>
            </input>            
        </div>
    )
}

```

### Continued development

```
Mobile first, clean code, refactoring, ReactJS.
```

### Useful resources

- [Professor-Matheus-Battisti](https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=1&pp=iAQB) - It was where I started my knowledge in ReactJS, and I was inspired.

### How to run the code? 


you can download it to your machine, open the code editor terminal, go into the root folder of the project and type 'npm run backend', to run the fake database. Open another terminal (click the + sign in the terminal) and type npm start. Wait for the terminal to complete and it will automatically open an address like 'localhost:3000/' or equivalent in your browser. 


 :)

## Author

- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)
