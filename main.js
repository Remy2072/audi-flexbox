const items = [
    {
        title: "Audi R8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien quis lorem interdum pharetra.",
        button: {
            label: "Lees meer",
            href: "#",
        },
    },
    {
        title: "Audi R8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien quis lorem interdum pharetra.",
        button: {
            label: "Lees meer",
            href: "#",
        },
    },
    {
        title: "Audi R8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien quis lorem interdum pharetra.",
        button: {
            label: "Lees meer",
            href: "#",
        },
    },
    {
        title: "Audi R8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien quis lorem interdum pharetra.",
        button: {
            label: "Lees meer",
            href: "#",
        },
    },
    {
        title: "Audi R8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien quis lorem interdum pharetra.",
        button: {
            label: "Lees meer",
            href: "#",
        },
    },
    {
        title: "Audi R8",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a sapien quis lorem interdum pharetra.",
        button: {
            label: "Lees meer",
            href: "#",
        },
    },
];

const container = document.querySelector(".container");

items.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";

    let logo = document.createElement("div");
    logo.className = "card-image logo-1";

    let title = document.createElement("h2");
    title.innerHTML = item.title;

    let text = document.createElement("p");
    text.innerHTML = item.text;

    let button = document.createElement("a");
    button.innerHTML = item.button.label;
    button.href = item.button.href;

    card.appendChild(logo);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(button);

    container.appendChild(card);
});
