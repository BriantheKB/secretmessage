let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length)
secretMessage.pop()
//console.log(secretMessage.length)
secretMessage.push('to', 'Program')
secretMessage[7] = 'right'
// to remove the first string use .shift()
secretMessage.shift(0)
// to add another string to the beginning use .unshift()
secretMessage.unshift('Programming')
// to remove strings, plural, and replace use .splice(element to first remove, how many, replace with what)
secretMessage.splice(6, 5, "know.")
//now to print all as a sentence, join passes elements
console.log(secretMessage.join(' '))
