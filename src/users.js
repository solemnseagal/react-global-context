const users = [
  {
    username: "solemn",
    password: btoa("minions"),
  },
  {
    username: "john",
    password: btoa("doe"),
  },
  {
    username: "Jane",
    password: btoa("beauty"),
  },
];

localStorage.setItem("usersList", JSON.stringify(users));

const usersList = localStorage.getItem("usersList");
const a = JSON.parse(usersList);
export const hash = a.map((e) => [e.username, e.password]);
