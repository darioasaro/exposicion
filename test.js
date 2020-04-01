 /**

 * @fileoverview  -index.js Este archivo es solo un test del funcionamiento de jsdocs

 * @version        -1.0

 * @author         -Dario Asaro <darioasaro29@gmail.com>

 */
 

 /**
 * @method testJs
 * @desc   - Funcion simple implementada para probar la documentacion
 * @param  {int} variableInt -variable prueba tipo entero
 * @param  {string} variableString -variable prueba tipo string
 * @return {string} retorno de la funcion tipo string
 */
const testJs = ()=>{
    const variableInt = 1
    const variableString = "Esto es un test Jsdocs"
    return variableString
}

/**
 * @method otherFunction
 * @desc   - Funcion simple implementada para probar la documentacion
 * @param  {Array} variableArr -variable prueba tipo array
 * @param  {object} variableObj -variable prueba tipo Object
 * @return {object} retorno de la funcion tipo Object
 */
const otherFunction = ()=>{
    const variableArr = [1,2,3]
    const variableObj = {test:"testJsDocs"}
    return variableObj
}