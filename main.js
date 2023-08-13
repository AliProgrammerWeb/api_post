fetch('https://karamooz.free.beeceptor.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
})
function todo(id){
    fetch('https://karamooz.free.beeceptor.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById(`id${id}`).value=data[`${id}`].id
        document.getElementById(`title${id}`).value=data[`${id}`].title
        document.getElementById(`completed${id}`).value=data[`${id}`].completed
})

}
function done(id){
    post={};
    post.id=document.getElementById(`id${id}`).value;
    post.id=document.getElementById(`title${id}`).value;
    post.id=document.getElementById(`completed${id}`).value;
    fetch('https://karamooz.free.beeceptor.com/todos',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:post
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById(`id-${id}`).value=data.id
    document.getElementById(`title-${id}`).value=data.title
    document.getElementById(`completed-${id}`).value=data.completed

})
}
