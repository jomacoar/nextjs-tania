import React from 'react';
import Form from 'next/form';
import { useActionState } from 'react';
import { createMessage } from '@/app/actions';
import CustomButton from '@/components/Button';
import { TextareaWithCounter } from './TextArea';

export default function contactForm() {
  const [state, formAction, isPending] = useActionState(createMessage, {
    message: null,
    error: null,
    values: { name: '', email: '', content: '' },
  });

  return (
    <Form
      action={formAction}
      className="bg-primary drop-shadow-lg w-[40%] h-[55vh] rounded-[64px] mt-0 mb-4 text-center flex-col justify-center items-center font-montserrat outline-1 outline-primary outline-offset-12"
    >
      <div className="w-full mt-10 mb-4 justify-center items-center">
        <label className="block mb-1 pl-10 text-start text-md italic text-secondary">
          Nome:
        </label>
        <input
          type="name"
          name="name"
          placeholder="Nome"
          className="w-[90%] p-2 border border-gray-300 text-secondary rounded-2xl focus:outline-none focus:ring-2 focus:ring-violetMain/50"
          required
        />
      </div>
      <div className="w-full my-4 justify-center items-center">
        <label className="block mb-1 pl-10 text-start text-md italic text-secondary">
          email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="nome@example.com"
          className="w-[90%] p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violetMain/50"
          required
        />
      </div>
      <div className="w-full my-4 justify-center items-center">
        <label className="block mb-1 pl-10 text-start text-md italic text-secondary">
          Mensagem:
        </label>
        <TextareaWithCounter
          className="w-[90%] max-h-44 min-h-16 p-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-violetMain/50"
          placeholder="Escreva a sua mensagem aqui..."
          defaultValue={state.values.content}
          name="content"
          rows="4"
          cols="30"
          required
        ></TextareaWithCounter>
        {state.error && <p className="text-sm text-red-500">{state.error}</p>}
        {state.message && (
          <p className="text-sm text-green-500">{state.message}</p>
        )}
      </div>
      <div className="w-full mt-8 flex justify-center items-center">
        <CustomButton
          onClick={() => {
            formAction;
          }}
          className="w-[90%] tracking-wide px-8 py-4 flex items-center justify-center text-secondary bg-orangeMain hover:scale-[1.007] rounded-full drop-shadow-lg transition-colors duration-200 group"
          personal="text-xl"
          showIcon={false}
          disabled={isPending}
        >
          {isPending ? 'Enviando...' : 'Enviar'}
        </CustomButton>
      </div>
    </Form>
  );
}
