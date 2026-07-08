const userList = document.getElementById("user-list");

async function loadUsers() {
    const response = await fetch("/api/users");
    const users = await response.json();

    userList.innerHTML = "";

    if (users.length === 0) {
        userList.innerHTML = `
            <tr>
                <td colspan="9">No users found.</td>
            </tr>
        `;
        return;
    }

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
            <td>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;

        userList.appendChild(row);
    });
}

loadUsers();

async function deleteUser(id) {
    const confirmed = confirm("Are you sure you want to delete this user?");

    if (!confirmed) {
        return;
    }

    const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
    });

    const result = await response.json();

    alert(result.message);

    loadUsers();
}
