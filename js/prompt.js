document.addEventListener("DOMContentLoaded", function () {

    const searchInput =
        document.getElementById("promptSearch");

    const prompts =
        document.querySelectorAll(".prompt-card");

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const noResults =
        document.getElementById("promptNoResults");

    let currentCategory = "all";


    function filterPrompts() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();

        let visibleCount = 0;


        prompts.forEach(function (prompt) {

            const category =
                prompt.dataset.category;

            const text =
                (
                    prompt.innerText +
                    " " +
                    (prompt.dataset.search || "")
                ).toLowerCase();


            const categoryMatch =
                currentCategory === "all" ||
                category === currentCategory;


            const searchMatch =
                query === "" ||
                text.includes(query);


            if (categoryMatch && searchMatch) {

                prompt.style.display = "";

                visibleCount++;

            } else {

                prompt.style.display = "none";

            }

        });


        noResults.hidden =
            visibleCount !== 0;

    }


    searchInput.addEventListener(
        "input",
        filterPrompts
    );


    categoryButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                categoryButtons.forEach(
                    function (btn) {

                        btn.classList.remove("active");

                    }
                );


                button.classList.add("active");


                currentCategory =
                    button.dataset.category;


                filterPrompts();

            }
        );

    });


    // =========================
    // COPY PROMPT
    // =========================

    const copyButtons =
        document.querySelectorAll(".copy-prompt");


    copyButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            async function () {

                const card =
                    button.closest(".prompt-card");

                const prompt =
                    card.querySelector(".prompt-text");


                try {

                    await navigator.clipboard.writeText(
                        prompt.innerText.trim()
                    );


                    const oldText =
                        button.innerText;


                    button.innerText =
                        "✅ کپی شد";


                    setTimeout(function () {

                        button.innerText =
                            oldText;

                    }, 1800);


                } catch (error) {

                    alert(
                        "کپی خودکار انجام نشد. متن را دستی کپی کنید."
                    );

                }

            }
        );

    });

});