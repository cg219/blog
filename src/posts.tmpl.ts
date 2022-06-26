export const layout = 'layouts/base.tmpl.ts';

export default function* ({ posts }) {
    for (const post of posts) {
        console.log(post)
        const date = new Date(post.published_at);

        yield {
            url: `/read/${post.slug}`,
            title: post.title,
            content: `
            <div class="content">
                <h1 class="post-title">${post.title}</h1>
                <h3 class="post-date">${new Date(post.published_at)}</h3>
                <h3 class="post-author">${post.primary_author.name}</h3>
                <div class="single-post">
                    ${post.html}
                </div>
            </div>`
        }
    }
}
