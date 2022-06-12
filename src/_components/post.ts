export const css = `
.post {
    margin: 1vw 0 3vw;
    padding:  2vw 0 0;
    border-top: .05vw solid #909090;
}

.post h1 {
    margin: 0 0 1vw;
    font-size: 2.2vw;
    line-height: 1;
}

.post h1:hover {
    color: #EF0038;
}

.post a {
    color: inherit;
    text-decoration: inherit;
    outline: inherit;
}

.post p {
    margin: 0;
    font-size: 1vw;
    line-height: 1.2;
    color: #393939;
}
`;

export default function({ title, excerpt }) {
    return `
        <div class='post'>
            <h1><a href='#'>${title}</a></h1>
            <p>${excerpt}</p>
        </div>`
}
