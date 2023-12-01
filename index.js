const {add,display,update}=require("./controller/bookcontroller");
const newBook={
 
    title: 'atom and Electron', 
    author: 'joe john thomson', 
    year: 1990
}
add(newBook);