const textElement=document.querySelector('.hello');
const text="مرحبا بكم في ( معرض الــــنصر ) للاجهزة الكهربائية والادوات المنزلية والمفروشات إدارة ا / محمد ناصر ت/01201250074";

let index=0;

function typewrite(){

if(index< text.length){
    if(text.charAt(index)==="\n"){
        textElement.innerHTML+="<br>";
    }
    else{
        textElement.innerHTML+=text.charAt(index);

    }
    index++;
    setTimeout(typewrite,70);
}
else{
    setTimeout(() => {
        textElement.innerHTML="";
        index=0;
        typewrite();
    }, 3000);
}

}
typewrite();


// 1. مصفوفات البيانات
const fridgeData = [
    { name: "ثلاجة توشيبا", desc: "وصف الثلاجة هنا...", img: "imgs/CRUD.PNG"},
    { name: "ثلاجة LG", desc: "وصف ثلاجة ال جي...", img: "imgs/todolist.PNG" }
];

const washersData = [
    { name: "غسالة زانوسي", desc: "غسالة أتوماتيك 7 كيلو", img: "imgs/town.PNG"},
    { name: "غسالة سامسونج", desc: "ديجيتال إنفرتر حديثة", img: "imgs/dashboard.PNG" }
];

const phonesData = [
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},
    { name: "آيفون 15", desc: "مساحة 256 جيجا لون أسود", img: "imgs/Clock2.PNG"},

    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" }
];

// 2. دالة عرض المنتجات
function displayProducts(dataArray, containerId) {
    const container = document.getElementById(containerId);
    const phoneNumber = "201201250074"; // رقم واتساب العميل (معرض النصر)

    dataArray.forEach(product => {
        const message = encodeURIComponent(`أهلاً معرض النصر، أريد الاستفسار عن: ${product.name}`);
        
        const cardHTML = `
            <div class="project">
                <img src="${product.img}" alt="${product.name}">
                <div class="info">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <a href="https://wa.me/${phoneNumber}?text=${message}" target="_blank" class="wa_link">
    <img src="imgs/whatsapp .png" alt="" class="whatsapp">
                        اطلب الآن  
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 3. تشغيل الدالة لكل قسم عند تحميل الصفحة
window.onload = () => {
    displayProducts(fridgeData, 'refrigerators-container');
    displayProducts(washersData, 'washers-container');
    displayProducts(phonesData, 'phones-container');
};


let showall=document.querySelector(".showall");
let mobile_section=document.querySelector("#phones-container");

showall.onclick = function () {

    if(mobile_section.style.height === "auto"){
        mobile_section.style.height = "250px";
        showall.innerText = "...عرض الكل";
    }else{
        mobile_section.style.height = "auto";
        showall.innerText = "عرض أقل";
    }

}