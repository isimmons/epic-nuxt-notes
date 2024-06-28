import { db } from '~/utils/db.server';

export default defineEventHandler(async (event) => {
  const noteId = event.context.params?.noteId;

  if (!noteId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });
  }

  try {
    db.note.delete({
      where: { id: { equals: noteId } },
    });
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
