
## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---ANS---

1.
 *getElementById: selects a element based on unique id name.
 *getElementsByClassName: select all elements common class name.
 *querySelector: selects the first element of CSS selector.
 *querySelectorAll:  select all CSS selector.

2.Create Element
   let p = document.createElement("")
  style dite hobe
   p.textContent = "dom"
  insert into the DOM
   document.body.appendChild(p);


3.Event Bubbling: jokhon ekta element e event gote tokhon sei event sudu oi element e theke jay na , taruporer parent er o upore document porjonto cole jay.

4.Event Delegation: child element gulor upore alada alda event listener na diye parent element e alta listener dei . event bubbling diye parent theke child er kaj gulo dhori. 
  onek gulo child thakle o matro ekta listener diye sob kora jay.
  porobortite jodi button add kori tahole alada event bosate hoy na.

5.
*preventDefault(): Browser load nile aita use kore.
                   Link e click korle onno page e jawa thamabe.
*stopPropagation(): Bubbling bondho kore.
                    Event ke parent er dike jawa bhondho kore.
