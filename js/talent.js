document.addEventListener("DOMContentLoaded", function () {


    const questions = [

        {
            icon: "💡",
            text: "وقتی با یک موضوع جدید روبه‌رو می‌شوی، معمولاً چه کاری انجام می‌دهی؟",

            answers: [

                {
                    text: "درباره‌اش تحقیق می‌کنم",
                    type: "research"
                },

                {
                    text: "سعی می‌کنم یک ایده جدید برایش پیدا کنم",
                    type: "creative"
                },

                {
                    text: "آن را امتحان می‌کنم و دست به کار می‌شوم",
                    type: "technical"
                },

                {
                    text: "درباره‌اش با دیگران صحبت می‌کنم",
                    type: "communication"
                }

            ]

        },


        {
            icon: "🎨",
            text: "کدام فعالیت بیشتر برایت جذاب است؟",

            answers: [

                {
                    text: "طراحی و ساخت تصاویر",
                    type: "creative"
                },

                {
                    text: "کار با کامپیوتر و ابزارها",
                    type: "technical"
                },

                {
                    text: "نوشتن و تحقیق",
                    type: "research"
                },

                {
                    text: "صحبت کردن و ارائه دادن",
                    type: "communication"
                }

            ]

        },


        {
            icon: "📱",
            text: "اگر بخواهی یک صفحه در شبکه‌های اجتماعی بسازی، بیشتر دوست داری چه کاری انجام دهی؟",

            answers: [

                {
                    text: "ساخت ویدیو و محتوای خلاقانه",
                    type: "creative"
                },

                {
                    text: "بررسی آمار و عملکرد صفحه",
                    type: "research"
                },

                {
                    text: "کار با ابزارهای مختلف",
                    type: "technical"
                },

                {
                    text: "ارتباط با مخاطبان",
                    type: "communication"
                }

            ]

        },


        {
            icon: "🧩",
            text: "وقتی یک مشکل سخت پیش می‌آید، معمولاً چه می‌کنی؟",

            answers: [

                {
                    text: "مرحله‌به‌مرحله آن را بررسی می‌کنم",
                    type: "research"
                },

                {
                    text: "یک راه متفاوت و خلاقانه پیدا می‌کنم",
                    type: "creative"
                },

                {
                    text: "خودم شروع به آزمایش راه‌حل‌ها می‌کنم",
                    type: "technical"
                },

                {
                    text: "از دیگران کمک و نظر می‌گیرم",
                    type: "communication"
                }

            ]

        },


        {
            icon: "🎤",
            text: "کدام کار را راحت‌تر انجام می‌دهی؟",

            answers: [

                {
                    text: "صحبت کردن جلوی دیگران",
                    type: "communication"
                },

                {
                    text: "نوشتن مطالب",
                    type: "research"
                },

                {
                    text: "ساختن و طراحی کردن",
                    type: "creative"
                },

                {
                    text: "کار با نرم‌افزار و فناوری",
                    type: "technical"
                }

            ]

        },


        {
            icon: "📚",
            text: "وقتی چیزی را دوست داشته باشی، چگونه یادش می‌گیری؟",

            answers: [

                {
                    text: "با مطالعه و تحقیق",
                    type: "research"
                },

                {
                    text: "با ساختن و امتحان کردن",
                    type: "technical"
                },

                {
                    text: "با خلاقیت و تجربه‌های مختلف",
                    type: "creative"
                },

                {
                    text: "با پرسیدن از دیگران",
                    type: "communication"
                }

            ]

        },


        {
            icon: "🎬",
            text: "کدام پروژه برایت جذاب‌تر است؟",

            answers: [

                {
                    text: "ساخت یک ویدیوی خلاقانه",
                    type: "creative"
                },

                {
                    text: "ساخت یک برنامه یا ابزار",
                    type: "technical"
                },

                {
                    text: "نوشتن یک مقاله تحقیقی",
                    type: "research"
                },

                {
                    text: "ساخت یک برنامه برای ارائه و صحبت",
                    type: "communication"
                }

            ]

        },


        {
            icon: "🤖",
            text: "اگر با یک ابزار هوش مصنوعی جدید روبه‌رو شوی، چه چیزی بیشتر برایت جذاب است؟",

            answers: [

                {
                    text: "امتحان کردن قابلیت‌های مختلف آن",
                    type: "technical"
                },

                {
                    text: "پیدا کردن کاربردهای خلاقانه",
                    type: "creative"
                },

                {
                    text: "یاد گرفتن نحوه کار آن",
                    type: "research"
                },

                {
                    text: "آموزش دادن آن به دیگران",
                    type: "communication"
                }

            ]

        },


        {
            icon: "🚀",
            text: "دوست داری در آینده بیشتر چه کاری انجام دهی؟",

            answers: [

                {
                    text: "تولید محتوا و طراحی",
                    type: "creative"
                },

                {
                    text: "کارهای فنی و تکنولوژی",
                    type: "technical"
                },

                {
                    text: "تحقیق و یادگیری",
                    type: "research"
                },

                {
                    text: "آموزش و ارتباط با دیگران",
                    type: "communication"
                }

            ]

        },


        {
            icon: "⭐",
            text: "کدام جمله بیشتر شبیه توست؟",

            answers: [

                {
                    text: "من همیشه دنبال ایده‌های جدید هستم",
                    type: "creative"
                },

                {
                    text: "من دوست دارم بفهمم چیزها چگونه کار می‌کنند",
                    type: "technical"
                },

                {
                    text: "من عاشق یادگیری و پیدا کردن اطلاعات جدید هستم",
                    type: "research"
                },

                {
                    text: "من از صحبت کردن و کمک کردن به دیگران لذت می‌برم",
                    type: "communication"
                }

            ]

        }

    ];


    const profiles = {

        creative: {

            title: "خلاقیت و تولید محتوا 🎨",

            description:
                "احتمالاً در زمینه‌هایی مثل طراحی، تولید محتوا، ایده‌پردازی، تصویرسازی و ساخت ویدیو می‌توانی عملکرد خوبی داشته باشی.",

            icon: "🎨"

        },


        technical: {

            title: "فناوری و مهارت‌های فنی 💻",

            description:
                "به نظر می‌رسد حل مسئله، کار با فناوری، ابزارهای دیجیتال و یادگیری مهارت‌های فنی می‌تواند برایت جذاب باشد.",

            icon: "💻"

        },


        research: {

            title: "تحقیق و یادگیری 📚",

            description:
                "احتمالاً در تحقیق، مطالعه، تحلیل اطلاعات، یادگیری عمیق و پیدا کردن پاسخ برای سؤال‌ها توانایی خوبی داری.",

            icon: "📚"

        },


        communication: {

            title: "ارتباط و آموزش 🎤",

            description:
                "به نظر می‌رسد ارتباط با دیگران، صحبت کردن، آموزش دادن، ارائه و فعالیت‌های رسانه‌ای می‌تواند برایت مناسب باشد.",

            icon: "🎤"

        }

    };


    let currentQuestion = 0;


    const scores = {

        creative: 0,

        technical: 0,

        research: 0,

        communication: 0

    };


    const questionText =
        document.getElementById(
            "questionText"
        );


    const questionIcon =
        document.getElementById(
            "questionIcon"
        );


    const answers =
        document.getElementById(
            "answers"
        );


    const questionNumber =
        document.getElementById(
            "questionNumber"
        );


    const progressPercent =
        document.getElementById(
            "progressPercent"
        );


    const progressFill =
        document.getElementById(
            "progressFill"
        );


    const questionArea =
        document.getElementById(
            "questionArea"
        );


    const resultArea =
        document.getElementById(
            "resultArea"
        );


    const resultList =
        document.getElementById(
            "resultList"
        );


    const restartButton =
        document.getElementById(
            "restartButton"
        );


    function showQuestion() {


        const question =
            questions[currentQuestion];


        questionIcon.textContent =
            question.icon;


        questionText.textContent =
            question.text;


        questionNumber.textContent =
            `سؤال ${currentQuestion + 1} از ${questions.length}`;


        const percent =
            Math.round(
                (
                    currentQuestion /
                    questions.length
                ) * 100
            );


        progressPercent.textContent =
            `${percent}٪`;


        progressFill.style.width =
            `${percent}%`;


        answers.innerHTML = "";


        question.answers.forEach(
            function (answer) {


                const button =
                    document.createElement("button");


                button.className =
                    "talent-answer";


                button.textContent =
                    answer.text;


                button.addEventListener(
                    "click",
                    function () {

                        scores[answer.type]++;

                        currentQuestion++;

                        if (
                            currentQuestion <
                            questions.length
                        ) {

                            showQuestion();

                        } else {

                            showResult();

                        }

                    }
                );


                answers.appendChild(button);

            }
        );

    }


    function showResult() {


        questionArea.hidden =
            true;


        resultArea.hidden =
            false;


        progressFill.style.width =
            "100%";


        progressPercent.textContent =
            "۱۰۰٪";


        questionNumber.textContent =
            "آزمون تمام شد";


        const sorted =
            Object.entries(scores)
                .sort(
                    (a, b) =>
                        b[1] - a[1]
                );


        resultList.innerHTML = "";


        sorted.forEach(
            function ([type, score], index) {


                if (score === 0) {
                    return;
                }


                const profile =
                    profiles[type];


                const percentage =
                    Math.round(
                        (
                            score /
                            questions.length
                        ) * 100
                    );


                const item =
                    document.createElement("div");


                item.className =
                    "result-item";


                item.innerHTML = `

                    <div class="result-item-top">

                        <span class="result-title">
                            ${profile.icon}
                            ${profile.title}
                        </span>

                        <span class="result-score">
                            ${percentage}٪
                        </span>

                    </div>

                    <div class="result-progress">

                        <div
                            style="width:${percentage}%">
                        </div>

                    </div>

                    <p>
                        ${profile.description}
                    </p>

                `;


                resultList.appendChild(item);

            }
        );

    }


    restartButton.addEventListener(
        "click",
        function () {


            currentQuestion = 0;


            scores.creative = 0;
            scores.technical = 0;
            scores.research = 0;
            scores.communication = 0;


            resultArea.hidden =
                true;


            questionArea.hidden =
                false;


            showQuestion();

        }
    );


    showQuestion();

});
