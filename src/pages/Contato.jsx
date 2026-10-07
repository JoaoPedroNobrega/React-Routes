import React, {useState} from 'react';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado, ${nome}! Mensagem enviada.`);
        setNome('');
        setEmail('');
        setMensagem('');
    }

    return (
        <div className='p-8 max-w-md mx-auto'>
            <h1 className='text-4xl font-bold text-green-600 mb-4'>
                Contato
            </h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Nome:
                        <input
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                    </label>
                </div>
                <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Email:
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                    </label>
                </div>
                <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Mensagem:
                        <textarea
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder='Sua mensagem'
                            required
                            className='w-full p-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                    </label>
                </div>
                <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Email:
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                    </label>
                </div>
                <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Email:
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                    </label>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Mensagem:
                        <input
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder='seu@email.com'
                            required
                            className='w-full p-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                    </label>
                </div>
                <div>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Mensagem:
                        <textarea
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            className='border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500'
                        />
                    </label>
                    <label className='block text-gray-700 font-semibold mb-2'>
                        Mensagem:
                    </label>
                        <input
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder='seu@email.com'
                            required
                            className='w-full p-3 border border-gray-300 rounded-lg
                            focus:outline-none focus:ring-2 focus:ring-purple-500'
                        />
                </div>

                <button 
                type='submit' className='bg-purple-600 text-white py-3 px-4
                rounded-lg hover:bg-purple-700 transition-colors'>
                    Enviar Mensagem
                </button>

            </form>
        </div>
    )
}
export default Contato
