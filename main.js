const api = "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";
const input = document.getElementById("input");
const images = document.querySelector(".images");

const generateImg = async () => {
    const methods = {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":input.value,
                "n": 3,
                "size": "256x256"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    const data = await res.json()
    const listImages = data.data;
    images.innerHTML = ''
    listImages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url

    })

}