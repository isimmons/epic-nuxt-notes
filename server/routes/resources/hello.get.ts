export default defineEventHandler(async (event) => {
  const text = 'Hello Foo!';
  const file = new Blob([text], { type: 'text/plain' });
  return new Response(file, {
    status: 200,
    headers: {
      'Content-Disposition': 'attachment; filename="hello.txt"',
      'Content-Type': 'application/text',
    },
  });
});
