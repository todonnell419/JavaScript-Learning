// let sentence
// let number_of_eggs

// sentence = 'hi mom'  //whenever using a variable use let, const, var, don't use var

// number_of_eggs = 3 //cant start variable names with a number, no spaces, use underscore instead. Camel case numberOfEggs

// //number_of_eggs = 8

// let total_groceries = number_of_eggs

// 651861651 this is a number

// hi mom this is a string of characters

// undefined may want to set it to nothing

// null absence of a value

// boolean true or false

//{object}, used to store complex data

let friends = {
    james: 'is super cool',
    lucy: 'isn\'t so cool',
    number_of_eggs: 3
}  //This of this more like a dictionary of key value pairs

let example_array = [1, 5, 7, 9, 4, 5, 3, 1, 5] //think of this like a list. Uses a 0 indexing system. Starts at 0 as counting

let is_true = true //boolean

//console.log(null) //circle parenthesis invoke

function my_first_function(value, secondvalue) {
    // output the value of is_true
    console.log(value * secondvalue)
}

let multiply_two_numbers = my_first_function  //this is dumb, don't do this

// my_first_function(3, 5)
// my_first_function(4, 6)
// my_first_function(6, 9)

// && AND || OR ! NOT

let condition1 = true
let condition2 = false

//console.log(typeof'')

// if (condition2 && condition1) {
//     console.log('hi mum')
// } else if (condition1 || condition2) {
//     console.log('one condition of the two was true')
// }
// else {
//     console.log('the value was false so here we are')
// }



example_array = [1, 5, 7, 9, 4, 5, 3, 1, 5]

let i = 0
let length = example_array.length
//console.log(length)

// while(i < length){
//     console.log('value was true:', i, example_array[i])

//     i = i + 1
// }


// for (let j = 0; j < length; j++) {

//     if (j % 2 === 6) {
//         break
//     }
//     console.log('value was true:', j, example_array[j])
// }



function add_strings(string1 = 'default1', string2 = 'default2'){

    let concat_string = string1 + ' ' + string2
    console.log(concat_string)
    return concat_string
}

let new_string = add_strings('hello')
console.log('The new string is:', new_string)