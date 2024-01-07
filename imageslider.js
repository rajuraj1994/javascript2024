const imgArray=['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg']
const arrayLength=imgArray.length
let i = 0
const sliderFunction=()=>{
    i++
    i=i%arrayLength
    // i=0%5=0,1%5=1,2%5=2,3%5=3,4%5=4,5%5=0
    document.querySelector('img').src=`images/${imgArray[i]}`
}
let set=setInterval(sliderFunction,5000)


document.querySelector('.container .right').addEventListener('click',()=>{
    i++
    i=i%arrayLength
    document.querySelector('img').src=`images/${imgArray[i]}`
})

document.querySelector('.container .left').addEventListener('click',()=>{
    i--
    if(i<0){
        i=arrayLength-1
    }
    document.querySelector('img').src=`images/${imgArray[i]}`
})

document.querySelector('.container').addEventListener('mouseover',()=>{
    clearInterval(set)
})

document.querySelector('.container').addEventListener('mouseout',()=>{
    set=setInterval(sliderFunction,5000)
})