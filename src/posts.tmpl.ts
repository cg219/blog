export const layout = 'layouts/base.tmpl.ts';

export default function* ({ posts }) {
    for (const post of posts) {
        yield {
            url: `/read/${post.slug}`,
            title: post.title,
            content: `<div class="content single-post">${post.html}</div>`
        }
    }
}
