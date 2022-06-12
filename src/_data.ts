const API_URL = Deno.env.get('IMK_API_URL');
const API_KEY = Deno.env.get('IMK_API_KEY');
const API_VERSION = 'v4';

const res = await fetch(`${API_URL}/ghost/api/content/posts/?key=${API_KEY}`);
const data = await res.json();

export const { posts } = data;
