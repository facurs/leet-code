/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
    
    for (let i = 0; i<nums.length; i++){
        const num = nums[i];
        const complement = target - num;
        
        if (map.has(complement)){
            return [map.get(complement), i];
        }
        map.set(num, i)
    }
    return null
};

/*
Un hash map, también conocido como tabla hash, es una estructura de datos que utiliza una función hash para mapear claves a valores en una tabla. La función hash toma la clave como entrada y devuelve un índice en la tabla donde se almacenará el valor correspondiente. Cuando se desea buscar un valor por su clave, la función hash se utiliza de nuevo para encontrar el índice donde se almacena el valor, lo que permite un acceso muy rápido a los valores almacenados.

Los hash maps se utilizan ampliamente en la programación debido a su eficiencia en la búsqueda de valores por claves. En particular, son útiles cuando se necesita una búsqueda rápida de valores, ya que tienen una complejidad de búsqueda promedio O(1). Esto significa que el tiempo de búsqueda no depende del tamaño de la tabla hash, sino que es constante en la mayoría de los casos. Esto es posible gracias a la función hash, que distribuye los valores de forma uniforme en la tabla, lo que minimiza las colisiones y, por lo tanto, reduce el tiempo de búsqueda.

Los hash maps se utilizan en muchos casos, como en:

Almacenamiento de valores únicos y recuperación rápida de valores por clave. Por ejemplo, un hash map se puede utilizar para almacenar un conjunto de palabras únicas en un texto y para contar la frecuencia de cada palabra.
Implementación de cache y memorización de resultados. Por ejemplo, un hash map se puede utilizar para almacenar los resultados de las operaciones costosas y para recuperarlos rápidamente si se solicitan de nuevo con los mismos parámetros.
Implementación de grafos y algoritmos de búsqueda. Por ejemplo, un hash map se puede utilizar para almacenar los nodos de un grafo y para buscar rápidamente los vecinos de un nodo determinado.
En resumen, los hash maps son una herramienta útil y poderosa para almacenar y buscar valores por clave de manera eficiente. Son ampliamente utilizados en la programación debido a su velocidad y versatilidad, y son una herramienta fundamental para muchas aplicaciones.
*/