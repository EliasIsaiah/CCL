const catImg = document.getElementById("cat");
const getCat = async () => {
    // const imageResponse = await axios.get("https://cdn62.picsart.com/182788826000202.jpg?type=webp&to=crop&r=256", { responseType: 'blob' })
    const imageResponse2 = await axios.get("https://cataas.com/cat")
    // console.log(imageResponse);
    console.log(imageResponse2);
    catImg.src = imageResponse2.data
}

getCat();