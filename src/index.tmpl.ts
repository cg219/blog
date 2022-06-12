export const title = 'BLOG TINGS';
export const layout = 'layouts/base.tmpl.ts';

export default function({ comp, posts }) {
    return `
        <div class="content">
            <h1>blog</h1>
            <div class='posts'>
                ${posts.map(({ title, excerpt, slug }) => comp.post({ title, excerpt, slug }))}
            </div>
        </div>`
}
