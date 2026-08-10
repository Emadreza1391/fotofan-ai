// ================================================
// فوت و فن AI
// Lessons Page
// ================================================


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const searchInput =
            document.getElementById(
                "allLessonsSearch"
            );


        const lessons =
            document.querySelectorAll(
                ".lesson-card"
            );


        const categoryButtons =
            document.querySelectorAll(
                ".category-btn"
            );


        const noResults =
            document.getElementById(
                "lessonsNoResults"
            );


        let currentCategory = "all";


        function filterLessons() {


            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            let visibleCount = 0;


            lessons.forEach(
                function (lesson) {


                    const category =
                        lesson.dataset.category;


                    const searchableText =
                        (
                            lesson.innerText +
                            " " +
                            (
                                lesson.dataset.search ||
                                ""
                            )
                        ).toLowerCase();


                    const categoryMatch =
                        currentCategory === "all" ||
                        category === currentCategory;


                    const searchMatch =
                        query === "" ||
                        searchableText.includes(query);


                    const show =
                        categoryMatch &&
                        searchMatch;


                    if (show) {

                        lesson.style.display = "";

                        visibleCount++;

                    } else {

                        lesson.style.display =
                            "none";

                    }

                }
            );


            noResults.hidden =
                visibleCount !== 0;

        }



        // =========================
        // SEARCH
        // =========================

        searchInput.addEventListener(
            "input",
            filterLessons
        );



        // =========================
        // CATEGORIES
        // =========================

        categoryButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        categoryButtons.forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );


                        currentCategory =
                            button.dataset.category;


                        filterLessons();

                    }
                );

            }
        );


    }
);