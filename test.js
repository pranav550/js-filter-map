let arr = [
    { id: 1, title: 'text1', isenable: false },
    { id: 2, title: 'text2', isenable: false },
    { id: 3, title: 'text3', isenable: false },
    { id: 4, title: 'text4', isenable: false },
    { id: 5, title: 'text5', isenable: false },
    { id: 6, title: 'text6', isenable: false },
    { id: 7, title: 'text7', isenable: false },
    { id: 8, title: 'text8', isenable: false },

];
let sub = ['text3'];

// long syntax
let newarr = arr.filter(data => {
    if (sub.includes(data.title)) {
        return data
    }
})
console.log(newarr)
let newnewarr = newarr.map(data => {
    return { id: data.id, title: data.title }
})
console.log(newnewarr)

//short syntax
let newarr1 = arr.filter(data => {
    if (sub.includes(data.title)) {
        return data
    }
}).map(data => {
    return { id: data.id, title: data.title }
})

console.log(newarr1)



