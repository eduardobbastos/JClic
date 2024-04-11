document.getElementById('gptForm').onsubmit = async function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário.

    const promptText = document.getElementById('prompt').value;
    const apiKey = 'Ssk-JNzOkrjoJgV2S6TKhxolT3BlbkFJ4lZiL6KTHPYlZ1uAYKb6'; // Substitua pela sua chave da API do OpenAI.

    const responseElement = document.getElementById('response');

    try {
        const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: promptText,
                max_tokens: 100
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        responseElement.textContent = `Resposta: ${data.choices[0].text}`;
    } catch (error) {
        console.error('Erro ao chamar a API do GPT:', error);
        responseElement.textContent = 'Erro ao obter resposta da API.';
    }
};
