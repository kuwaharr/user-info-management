const userList = document.getElementById("user-list");

async function loadUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();

    userList.innerHTML = "";

    users.forEach((user) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td>${user.job}</td>
            <td>${user.note}</td>
        `;

        userList.appendChild(row);
    });
}

loadUsers();
