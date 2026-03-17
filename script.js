let menu_icon=document.querySelector(".menubtn");
let newlinks=document.querySelector(".newlinks");
let elaicona=document.querySelector(".elaicona");
let nav=document.querySelector(".nav");


menu_icon.onclick = function() {
    elaicona.style.transition = "opacity 0.3s";
    elaicona.style.opacity = 0;

    setTimeout(() => {
        if(newlinks.style.display === "block"){
            newlinks.style.display = "none";
            elaicona.src = 'imgs/menu.svg';
            nav.style.height="60px";

        } else {
            newlinks.style.display = "block";
            elaicona.src = 'imgs/elaicona.svg';
            nav.style.height="auto";
        }

        elaicona.style.opacity = 1;
    }, 400); 
}


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
    { name: "فريزر فريش 330 لتر ", desc: "موديل : FDF-330S سعة 255 لتر لون سيلفر دى فروست جهاز سريع التجميد إضاءة داخلية تصميم رائع ومعاصر يوفر في استهلاك الطاقة الأبعاد 85* 1005 * 705 ملم.", img: "imgs/fridges/fresh_frezer.jpeg" }
];

const washersData = [
    { name: "غسالة زانوسي", desc: "غسالة أتوماتيك 7 كيلو", img: "imgs/town.PNG"},
    { name: "غسالة سامسونج", desc: "ديجيتال إنفرتر حديثة", img: "imgs/dashboard.PNG" }
];


const potogas = [
    { name: "بوتاجاز ريال تك ", desc: "روك أسود ستيل أمان كامل,حوامل زهر ⁦,⁩شعلات سباف ايطالى ⁦,⁩مفتاح ذهبي ⁦,⁩أمان كامل ⁦,⁩زجاج عاكس مراية أشعال ذاتى فرن شواية ⁦,⁩مروحة داخلية لتوزيع الحرارة ⁦,⁩ماتور شواية ⁦,⁩أضاءة داخلية ⁦,⁩تايمر ديچيتال ⁦,⁩خزنة سفلية لحفظ الطعام ⁦,⁩ضمان خمس سنوات ضد عيوب الصناعة ⁦", img: "imgs/بوتوجازات/بوتاجاز ريال تك REAL TECH روك أسود ستيل أمان كامل .jpeg"},
    { name: "غسالة سامسونج", desc: "ديجيتال إنفرتر حديثة", img: "imgs/dashboard.PNG" }
];


const shashah = [
    { name: "شاشة LG ", desc: "شاشه ال جي 65 بوصه سمارت 4k,حجم الشاشة: 65 بوصة,تقنية الشاشة: LED,درجة الوضوح: Ultra HD 4K.الدقة: 3840 × 2160,مواصفات الشاشة:* مزودة بريسيفر داخلي 4K* معالج رباعي النواة Quad Core* بحث صوتي باللغة العربية و الإنجليزية* أتصال بالأجهزة الذكية (IOS , Android )* نظام التشغيل Web OS* أتصال Bluetooth* تطبيق Smart ThinQ* تطبيق LG TV Plus* متصفح الويب* مشغل الموسيقي المداخل والمخارج:* 3 مداخل HDMI* 2 مدخل USB* مدخل RF* مخرج سماعة الرأس* مخرج الصوت الرقمي البصري Optical Audio* مدخل AV,الأتصال بالأنترنت:* أتصال سلكي LAN* أتصال لاسلكي Wifi,ملحقات الجهاز:* البطاريات* كابل الطاقة* شهادة الضمان, دليل المستخدم", img: "imgs/شاشات/شاشه ال جي 65 بوصه سمارت .jpeg"},
    { name: "غسالة سامسونج", desc: "ديجيتال إنفرتر حديثة", img: "imgs/dashboard.PNG" }
];
const phonesData = [
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
    { name: "سامسونج S23", desc: "كاميرا احترافية وشاشة ممتازة", img: "imgs/سبحة.jpg" },
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
                    <h3 class="product_name">${product.name}</h3>
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
    displayProducts(potogas, 'potogas');
    displayProducts(shashah, 'shashah');

    displayProducts(phonesData, 'phones-container');
};

