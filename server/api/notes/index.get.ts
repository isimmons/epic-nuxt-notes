import { db } from '~/utils/db.server';

export default defineEventHandler(async (event) => {
  try {
    const owner = db.user.findFirst({
      where: {
        username: { equals: 'kody' },
      },
    });

    if (!owner)
      throw createError({
        status: 404,
        statusMessage: 'Owner not found.',
      });

    const notes = db.note.findMany({
      where: {
        owner: {
          username: { equals: 'kody' },
        },
      },
    });

    return {
      owner: { name: owner.name, username: owner.username },
      notes: notes.map((note) => ({ id: note.id, title: note.title })),
    };
  } catch (e) {
    if (e instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: `Internal Server Error: ${e.message}`,
      });
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: `Internal Server Error: ${e}`,
      });
    }
  }
});
