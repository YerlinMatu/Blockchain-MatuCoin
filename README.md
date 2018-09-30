# Blockchain-MatuCoin 💰

<strong>Transaction:</strong> Una transacción representa una transferencia de valor. <br/> Esto puede ser dinero, mercancía, registros médicos, etc.

<strong>Block:</strong> Un minero extrae un bloque que luego se llena de transacciones y se agrega a la cadena de bloques.

<p>Un bloque se extrae en función de su clave que se compone de las siguientes propiedades:</p>

1. index: el índice actual del bloque en la cadena de bloques.

2. previousHash: el hash del bloque anterior en el blockchain.

3. hash: el hash actual del bloque.

4. nonce: El número mágico que se incrementa para encontrar el hash secreto que se usa para firmar el bloque.

5. transactions: una lista de transacciones agregadas al bloque.

<strong>Blockchain:</strong> Un blockchain representa la lista de bloques enlazados. <br/> Una cadena de bloques es inmutable, lo que significa que una vez que el bloque se agrega a la cadena de bloques, no se puede modificar.