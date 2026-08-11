// ================================================
// فوت و فن AI
// Main JavaScript
// ================================================

document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("lessonSearch");

    const lessonItems =
        document.querySelectorAll(".lesson-item");

    const noResults =
        document.getElementById("noResults");

    const searchMessage =
        document.getElementById("searchMessage");


    // اگر صفحه جست‌وجو نداشت، کاری انجام نده
    if (!searchInput) {
        return;
    }


    searchInput.addEventListener("input", function () {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        let visibleCount = 0;


        lessonItems.forEach(function (lesson) {

            const text =
                (
                    lesson.innerText +
                    " " +
                    (lesson.dataset.search || "")
                ).toLowerCase();


            const matches =
                query === "" ||
                text.includes(query);


            if (matches) {

                lesson.style.display = "";

                visibleCount++;

            } else {

                lesson.style.display = "none";

            }

        });


        // پیام جست‌وجو

        if (query === "") {

            searchMessage.textContent =
                "نام یا موضوع آموزش را وارد کن.";

        } else {

            searchMessage.textContent =
                visibleCount +
                " آموزش پیدا شد.";

        }


        // اگر چیزی پیدا نشد

        if (visibleCount === 0 && query !== "") {

            noResults.hidden = false;

        } else {

            noResults.hidden = true;

        }

    });

});
