





const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const allProducts = {

    "pfashm": {
        name: "Advanced Snail 96 Mucin Power Essence",
        price: "26.50 JOD",
        desc: "The New York Post Most Wanted 2024 Award winning Advanced Snail 96 Mucin Power Essence by COSRX helps strengthen the skin barrier using 96% snail mucin (100ml).",
        img: "mamaa.png"
    },
    "pmg1": {
        name: "Vitamin E SPF 50+",
        price: "24.38 JOD",
        desc: "Lightweight Vitamin E Sunscreen for All Skin Tones (50mL)",
        img: "s3ane.jpeg"
    },
    "pmg2": {
        name: "PDRN Hyaluronic Serum",
        price: "28.00 JOD",
        desc: "Triple Revitalizing Complex ─ Combining PDRN, Hyaluronic Acid. (30mL)",
        img: "q3an.png"
    },
    "pmg3": {
        name: "Easy Bake Powder",
        price: "43.00 JOD",
        desc: "Blurs, sets & locks in makeup for an all-day. (20g)",
        img: "l1a.webp"
    },
    "pmg4": {
        name: "Dior Addict Lip Glow Oil",
        price: "45.00 JOD",
        desc: "24h Hydrating Lip Oil - 3 Ultra-Glossy Finishes. (6ML)",
        img: "p2a.webp"
    },
    "pmg5": {
        name: "AC Foam Cleanser",
        price: "15.90 JOD",
        desc: "daily acne cleanser that provides both freshness and moisture. (50mL)",
        img: "q1n.png"
    },
    "pmg6": {
        name: "shape tape concealer",
        price: "32.80 JOD",
        desc: "full coverage, natural matte finish. (30mL)",
        img: "k1a.webp"
    },
    "pmg7": {
        name: "Hyaluronic Acid Gel",
        price: "19.98 JOD",
        desc: "A gel cream  natural moisturizing factors and 5 types of hyaluronic acid. (100mL)",
        img: "m1an.webp"
    },
    "pmg8": {
        name: "Spontaneous Palette",
        price: "21.00 JOD",
        desc: "Driven by wanderlust and wild curiosity, you live life to the fullest, spontaneous Sagittarius.",
        img: "i1an.jpg"
    },
    "pmg9": {
        name: "Hydrating Lip Gloss",
        price: "15.00 JOD",
        desc: "Lips look fuller and plumper after applying this high-shine, vibrant lip gloss. (6mL)",
        img: "p1a.webp"
    },
    "pmg10": {
        name: "Deep Sleep Mask",
        price: "24.30 JOD",
        desc: "A sleeping mask infused with PDRN derived from Wando-grown gim. (80mL)",
        img: "e2an.webp"
    },
    "pmg11": {
        name: "Sun Serum UV",
        price: "17.10 JOD",
        desc: "Hydrating Daily SPF50 Sun Serum A lightweight serum-like sunscreen. (50mL)",
        img: "s1ann.png"
    },
    "pmg12": {
        name: "EASY BAKE PRESSED",
        price: "43.00 JOD",
        desc: "fine pressed powder with 12hr shine control  airbrush matte finish. (8.5G)",
        img: "c1a.webp"
    },

};



const product = allProducts[productId];
if (product) {
    document.getElementById('product-title').innerText = product.name;
    document.getElementById('product-desc').innerText = product.desc;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('main-img').src = product.img;
}