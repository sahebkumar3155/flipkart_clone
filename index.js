let arr = [
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/4f84f7cf33100b5d.png?q=100",
        title:"Top Offers",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/72ec95ea3c99ee60.png?q=100",
        title:"Mobiles & Tablets",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/0dac5f7442d7fd5f.png?q=100",
        title:"Electronics",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/436cd6fc952ae1cb.png?q=100",
        title:"TVs & Appliances",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/eb336e40e5a1b6ec.png?q=100",
        title:"Fashion",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/f4f8f26cdeb86ce4.png?q=100",
        title:"Beauty",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/92b1f08861995c5f.png?q=100",
        title:"Home & Kitchen",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/d47b98754854d054.png?q=100",
        title:"Furniture",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/7f42ba8e79833eaa.png?q=100",
        title:"Flights",
        href: "",
    },
    {
        Img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/95/95/image/898880c3805043b1.png?q=100",
        title:"Grocery",
        href: "",
    },
];

// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.map((element)=>{
    let image = document.createElement("img")
    image.src = element.Img_src;
    let title = document.createElement("p");
    title.innerHTML = element.title;

    let box = document.createElement("div");
    box.append(image, title);

    console.log(box);
    document.getElementById("categories").append(box);

})
let a = document.getElementById("categories");