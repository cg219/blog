import lume from "lume/mod.ts";
import 'dotenv/load.ts';

const site = lume({
    src: './src',
    dest: './dist',
    location: new URL(Deno.env.get('IMK_URL')),
    prettyUrls: true,
    server: {
        port: 3005,
        page404: './404.html'
    },
    components: {
        cssFile: '/css/components.css'
    }
});

site.copy('css');

export default site;
