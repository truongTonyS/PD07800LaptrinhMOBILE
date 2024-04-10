export const users = [
    { 
        id: 1,
        name: "HaHoang",
        email: "example1@example.com",
        password: "password1"
    },
    { 
        id: 2,
        name: "John Doe",
        email: "example2@example.com",
        password: "password2"
    },
    { 
        id: 3,
        name: "Jane Doe",
        email: "example3@example.com",
        password: "password3"
    },
    // Thêm các người dùng khác tại đây
];

export const userExists = (email) => {
    return users.some((user) => user.email === email);
};
