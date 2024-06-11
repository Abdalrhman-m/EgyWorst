// script.js

function toggleMenu() {
    var menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
}

const translations = {
    "en": {
        "nolan": "Best known for his cerebral, often nonlinear storytelling, acclaimed Academy Award winner writer/director/producer Sir Christopher Nolan CBE was born in London, England. Over the course of more than 25 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made and became one of the most celebrated filmmakers of modern cinema.",
        "darkKnight": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "inception": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
        "interstellar": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        "oppenheimer": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        "memento": "A man with short-term memory loss attempts to track down his wife's murderer. The film starts with a Polaroid photograph of a dead man. As the sequence plays backward, the photo reverts to its undeveloped state, entering the camera before the man is shot in the head."
    },
    "ar": {
        "nolan": "اشتهر بسرده العقلي وغير الخطي في كثير من الأحيان، كاتب/مخرج/منتج حائز على جائزة الأوسكار السير كريستوفر نولان CBE ولد في لندن، إنجلترا. على مدار أكثر من 25 عامًا من صناعة الأفلام، انتقل نولان من أفلام مستقلة بميزانية منخفضة إلى العمل على بعض من أكبر الأفلام التي تم إنتاجها على الإطلاق وأصبح أحد أكثر صانعي الأفلام احتفاءً في السينما الحديثة.",
        "darkKnight": "عندما يقوم الجوكر بإحداث الفوضى والفوضى بين سكان مدينة جوثام، يجب على باتمان أن يقبل أحد أعظم الاختبارات النفسية والجسدية لقدراته على محاربة الظلم.",
        "inception": "لص يسرق الأسرار التجارية من خلال استخدام تقنية مشاركة الأحلام يتم تكليفه بمهمة زرع فكرة في عقل الرئيس التنفيذي، لكن ماضيه المأساوي قد يدين المشروع وفريقه بالفشل.",
        "interstellar": "عندما تصبح الأرض غير صالحة للسكن في المستقبل، يتم تكليف مزارع وطيار سابق في ناسا، جوزيف كوبر، بقيادة مركبة فضائية، جنبًا إلى جنب مع فريق من الباحثين، للعثور على كوكب جديد للبشر.",
        "oppenheimer": "قصة العالم الأمريكي جي. روبرت أوبنهايمر ودوره في تطوير القنبلة الذرية.",
        "memento": "رجل يعاني من فقدان الذاكرة القصير الأمد يحاول تعقب قاتل زوجته. يبدأ الفيلم بصورة بولارويد لرجل ميت. مع تقدم التسلسل إلى الوراء، تعود الصورة إلى حالتها غير المطورة، وتدخل الكاميرا قبل إطلاق النار على الرجل في رأسه."
    }
};

let currentLanguage = "en";

function toggleLanguage() {
    const elements = document.querySelectorAll('.translatable');
    if (currentLanguage === "en") {
        elements[0].textContent = translations["ar"].nolan;
        elements[1].textContent = translations["ar"].darkKnight;
        elements[2].textContent = translations["ar"].inception;
        elements[3].textContent = translations["ar"].interstellar;
        elements[4].textContent = translations["ar"].oppenheimer;
        elements[5].textContent = translations["ar"].memento;
        elements.forEach(element => element.classList.add('rtl'));
        currentLanguage = "ar";
    } else {
        elements[0].textContent = translations["en"].nolan;
        elements[1].textContent = translations["en"].darkKnight;
        elements[2].textContent = translations["en"].inception;
        elements[3].textContent = translations["en"].interstellar;
        elements[4].textContent = translations["en"].oppenheimer;
        elements[5].textContent = translations["en"].memento;
        elements.forEach(element => element.classList.remove('rtl'));
        currentLanguage = "en";
    }
}
