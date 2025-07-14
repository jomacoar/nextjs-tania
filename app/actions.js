'use server';
import { z } from 'zod';
import { getCollection } from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';

const MessageSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be 100 characters or less'),
  email: z.string().email('Invalid email address'),
  content: z
    .string()
    .min(1, 'Message is required')
    .max(1000, 'Message must be 1000 characters or less'),
});

export async function createMessage(prevState, formData) {
  console.log('Received formData:', Object.fromEntries(formData));
  try {
    const { name, email, content } = MessageSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      content: formData.get('content'),
    });
    console.log('Validated data:', { name, email, content });

    const wordCount = content
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    if (wordCount > 70) {
      console.log('Word count exceeded:', wordCount);
      return {
        error: 'Message exceeds 70-word limit',
        message: null,
        values: { name, email, content },
      };
    }

    const collection = await getCollection('messages');
    console.log('Connected to messages collection');
    const result = await collection.insertOne({
      name,
      email,
      content,
      createdAt: new Date(),
    });
    console.log('Insert result:', result);

    revalidatePath('/');

    return {
      message: 'Mensagem enviada. Obrigado!',
      error: null,
      values: { name: '', email: '', content: '' },
    };
  } catch (error) {
    console.error('Error in createMessage:', error);
    if (error instanceof z.ZodError) {
      return {
        error: error.errors[0].message,
        message: null,
        values: {
          name: formData.get('name'),
          email: formData.get('email'),
          content: formData.get('content'),
        },
      };
    }
    return {
      error: 'Ocorreu um erro. Por favor, tente novamente.',
      message: null,
      values: {
        name: formData.get('name'),
        email: formData.get('email'),
        content: formData.get('content'),
      },
    };
  }
}
