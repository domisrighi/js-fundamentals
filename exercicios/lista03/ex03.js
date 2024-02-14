/*3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.*/

usuarioLogado = true;
usuarioAdmin = false;

resultado = usuarioLogado && usuarioAdmin;

console.log(`usuário admin logado? ${resultado}`);