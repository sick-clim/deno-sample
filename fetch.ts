const site = await fetch("http://www.deno.com");
console.log(await site.text());
