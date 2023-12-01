const {booksDatabase}= require("../database/bk");
// function which add new bookRegitration

const add=(newBook) =>{
newBook.id =booksDatabase.length+1;
booksDatabase.push(newBook);

console.log("\nNew registration added\n")
console.log(booksDatabase);

}

// function which display bookRegistration

const display=()=>{
    console.log("\nthis is all registration\n");
    console.log(registration);
}

// function which update bookRegistration

const update =(id,key,value)=>{
    var exist= students.find(ele=>ele.id===id);
    if(!exist){
        console.log("registration not found");
    }
    else{
        exist[key]=value;
        console.log("\nthis is updated registration\n");
        console.log(exist);
    }
    }

    // function which delete bookregistration
    const remove = (id)=>{
        exist.id= bookRegistration.find(ele=>ele===id);
        if(!exist){
            console.log("\nbookRegistration not found\n");
        }
        else{
            var remainder=[];
            exist.id=bookRegistration.filter(ele=>ele!==id);
            console.log("\nthe remained bookregistration");
            console.log(remainder);
        }
        
    }



module.exports={
    add,
    display,
    update,
    remove
};


    
module.exports={
    add,
    display,
    update,
    delete,

}