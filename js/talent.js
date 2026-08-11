document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        ["💡", "وقتی با یک موضوع جدید روبه‌رو می‌شوی، بیشتر چه کار می‌کنی؟", [["درباره‌اش تحقیق می‌کنم", "research"], ["یک ایده تازه برایش پیدا می‌کنم", "creative"], ["آن را امتحان و آزمایش می‌کنم", "technical"], ["درباره‌اش با دیگران صحبت می‌کنم", "communication"]]],
        ["🎨", "کدام فعالیت بیشتر برایت جذاب است؟", [["طراحی و ساخت تصاویر", "creative"], ["کار با کامپیوتر و ابزارها", "technical"], ["نوشتن و تحقیق", "research"], ["صحبت کردن و ارائه دادن", "communication"]]],
        ["📱", "اگر یک صفحه در شبکه‌های اجتماعی بسازی، بیشتر دوست داری چه کاری انجام دهی؟", [["ساخت ویدیو و محتوای خلاقانه", "creative"], ["بررسی آمار و عملکرد صفحه", "research"], ["کار با ابزارهای مختلف", "technical"], ["ارتباط با مخاطبان", "communication"]]],
        ["🧩", "وقتی یک مشکل سخت پیش می‌آید، معمولاً چه می‌کنی؟", [["مرحله‌به‌مرحله بررسی‌اش می‌کنم", "research"], ["یک راه متفاوت و خلاقانه پیدا می‌کنم", "creative"], ["خودم شروع به آزمایش راه‌حل‌ها می‌کنم", "technical"], ["از دیگران نظر می‌گیرم", "communication"]]],
        ["🎤", "کدام کار را راحت‌تر انجام می‌دهی؟", [["صحبت کردن جلوی دیگران", "communication"], ["نوشتن مطالب", "research"], ["ساختن و طراحی کردن", "creative"], ["کار با نرم‌افزار و فناوری", "technical"]]],
        ["📚", "وقتی چیزی را دوست داشته باشی، چگونه یادش می‌گیری؟", [["با مطالعه و تحقیق", "research"], ["با ساختن و امتحان کردن", "technical"], ["با تجربه‌های خلاقانه", "creative"], ["با پرسیدن از دیگران", "communication"]]],
        ["🎬", "کدام پروژه برایت جذاب‌تر است؟", [["ساخت یک ویدیوی خلاقانه", "creative"], ["ساخت یک برنامه یا ابزار", "technical"], ["نوشتن یک مقاله تحقیقی", "research"], ["آموزش یا ارائه برای دیگران", "communication"]]],
        ["🤖", "اگر با یک ابزار هوش مصنوعی جدید روبه‌رو شوی، چه چیزی بیشتر جذبت می‌کند؟", [["امتحان کردن قابلیت‌های مختلف", "technical"], ["پیدا کردن کاربردهای خلاقانه", "creative"], ["یاد گرفتن نحوه کار آن", "research"], ["آموزش دادن آن به دیگران", "communication"]]],
        ["🚀", "دوست داری در آینده بیشتر چه کاری انجام دهی؟", [["تولید محتوا و طراحی", "creative"], ["کارهای فنی و فناوری", "technical"], ["تحقیق و یادگیری", "research"], ["آموزش و ارتباط با دیگران", "communication"]]],
        ["⭐", "کدام جمله بیشتر شبیه توست؟", [["همیشه دنبال ایده‌های جدید هستم", "creative"], ["دوست دارم بفهمم چیزها چگونه کار می‌کنند", "technical"], ["عاشق یادگیری و پیدا کردن اطلاعات جدید هستم", "research"], ["از صحبت کردن و کمک کردن به دیگران لذت می‌برم", "communication"]]]
    ];

    const profiles = {
        creative: ["🎨", "خلاقیت و تولید محتوا", "زمینه‌هایی مثل طراحی، ایده‌پردازی، تصویرسازی و ساخت ویدیو می‌توانند برایت جذاب باشند."],
        technical: ["💻", "فناوری و مهارت‌های فنی", "حل مسئله، کار با فناوری، ابزارهای دیجیتال و مهارت‌های فنی می‌توانند گزینه‌های مناسبی برای تمرین بیشتر باشند."],
        research: ["📚", "تحقیق و یادگیری", "تحقیق، مطالعه، تحلیل اطلاعات و یادگیری عمیق می‌توانند از زمینه‌های مناسب برای رشد مهارتت باشند."],
        communication: ["🎤", "ارتباط و آموزش", "ارتباط با دیگران، ارائه، آموزش و فعالیت‌های رسانه‌ای می‌توانند زمینه‌های جالبی برای رشد تو باشند."]
    };

    let current = 0;
    const scores = { creative: 0, technical: 0, research: 0, communication: 0 };
    const $ = id => document.getElementById(id);

    function render() {
        const [icon, text, options] = questions[current];
        $("questionIcon").textContent = icon;
        $("questionText").textContent = text;
        $("questionNumber").textContent = `سؤال ${current + 1} از ${questions.length}`;
        const pct = Math.round((current / questions.length) * 100);
        $("progressPercent").textContent = `${pct}٪`;
        $("progressFill").style.width = `${pct}%`;
        $("answers").innerHTML = "";
        options.forEach(([label, type]) => {
            const button = document.createElement("button");
            button.className = "talent-answer";
            button.type = "button";
            button.textContent = label;
            button.addEventListener("click", () => {
                scores[type]++;
                current++;
                current < questions.length ? render() : showResult();
            });
            $("answers").appendChild(button);
        });
    }

    function showResult() {
        $("questionArea").hidden = true;
        $("resultArea").hidden = false;
        $("questionNumber").textContent = "آزمون تمام شد";
        $("progressPercent").textContent = "۱۰۰٪";
        $("progressFill").style.width = "100%";
        $("resultList").innerHTML = "";
        Object.entries(scores).sort((a, b) => b[1] - a[1]).forEach(([type, score]) => {
            if (!score) return;
            const [icon, title, description] = profiles[type];
            const percent = Math.round((score / questions.length) * 100);
            const item = document.createElement("div");
            item.className = "result-item";
            item.innerHTML = `<div class="result-item-top"><span class="result-title">${icon} ${title}</span><span class="result-score">${percent}٪</span></div><div class="result-progress"><div style="width:${percent}%"></div></div><p>${description}</p>`;
            $("resultList").appendChild(item);
        });
    }

    $("restartButton").addEventListener("click", () => {
        current = 0;
        Object.keys(scores).forEach(key => scores[key] = 0);
        $("resultArea").hidden = true;
        $("questionArea").hidden = false;
        render();
    });

    render();
});
