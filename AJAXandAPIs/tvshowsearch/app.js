const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED!")
    // console.dir(form)
    // console.log(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const config = { params: {q: searchTerm}}
    // const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
    // console.log(res.data[0].show.image.medium);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img)
})

const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result)
        if(result.show.image){
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}
