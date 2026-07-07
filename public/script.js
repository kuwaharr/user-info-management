const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get("name"),
        age: formData.get("age"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        job: formData.get("job"),
        note: formData.get("note"),
    };

    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const result = await response.json();

    console.log(result);
})
