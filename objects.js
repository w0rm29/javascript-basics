// Objects -  objects are used to store keyed collections of various data and more complex entities. 
// In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

let user = {
    name: "John",
    age: 25
};

user.isAdmin = true;

// Json.

//console.log(Object.keys(user)); // returns a list

//console.log(Object.hasOwnProperty(user, "isAdmin")); // boolean

// Deep clone

function deepClone(value){
    if(value === null || value !== 'object'){
        return value;
    }

    if(Array.isArray(value)){
        return value.map((item) => deepClone(item));
    }

    const cloneObj = {};
    for(const key in value){
        if(value.hasOwn(key)){
            cloneObj[key] = deepClone(value[key]);
        }
    }
    return cloneObj;
}

// Deep Equal

/*

deepEqual('foo', 'foo'); // true
deepEqual({ id: 1 }, { id: 1 }); // true
deepEqual([1, 2, 3], [1, 2, 3]); // true
deepEqual([{ id: '1' }], [{ id: '2' }]); // false

*/

function deepEqual(valueA, valueB){
    if(valueA !== valueB){
        return false;
    }

    if(Array.isArray(valueA) !== Array.isArray(valueB)){
        return true;
    }

    if(Array.isArray(valueA) && Array.isArray(valueB)){
        if(valueA !== valueB){
            return false;
        }
        for(let i=0; i<valueA.length; i++){
            if(!deepEqual(valueA[i], valueB[i])){
                return false;
            }
        }
        return true;
    }

    if(typeof valueA !== 'object' || valueA === null || typeof valueB !== 'object' || valueB === null){
        return false;
    }
    

    let keyA = Object.keys(valueA);
    let keyB = Object.keys(valueB);

    if(keyA.length !== keyB.length){
        return false;
    }

    for(let key of keyA){
        if(!keyB.includes(key) || !deepEqual(valueA[key], valueB[key])){
            return false;
        }
    }

    return true;
}

// deep omit

/*

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};
deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }

*/


const o = {
    f: [5, 6],
    e: 4,
    g: 3
};

function recur(o){
    if(o === null){
        return;
    }
    return o.map((item) => recur(item));
}

console.log(Object.entries(o).map(([key, value]) => key));



function deepOmit(val, keys){
    if(Array.isArray(val)){
        return val.map((item) => deepOmit(item, keys));
    }

    if(isPlainObject(val)){
        const obj = {};
        for(const key in val){
            if(!keys.includes(key)){
                obj[key] = deepOmit(val[key], keys);
            }
        }
        return obj;
    }

    return val;
}

function isPlainObject(val){
    if(val === null){
        return false;
    }
    const objProto = Object.getPrototypeOf(val);

    return objProto === 'null' || typeof objProto === 'object';
}


// Squash

/*

const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

*/

function squash(obj){
    return squashImpl(obj, [], {});
}

function squashImpl(obj, path, output){
    Object.entries(obj).forEach(([key, value]) => {
        if(typeof value !== 'object' || value === null){
            output[path.concat(key).filter(Boolean).join('.')] = value;
        }
        else
            squashImpl(value, path.concat(key), output);
    });
}


// JSON Stringify

/*

jsonStringify({ foo: 'bar' }); // '{"foo":"bar"}'
jsonStringify({ foo: 'bar', bar: [1, 2, 3] }); // '{"foo":"bar","bar":[1,2,3]}'
jsonStringify({ foo: true, bar: false }); // '{"foo":true,"bar":false}'

*/

{
    foo: 'bar'
}

// [['foo', true], ['bar', false]]

function jsonStringify(val){
    if(Array.isArray(val)){
        const arrayValue = val.map((item) => jsonStringify(item));
        return `[${arrayValue.join(',')}]`;
    }

    if(typeof val === 'object' && val === null){
        const objValue = Object.entries(val).map(([key, value]) => 
            `"${key}":${jsonStringify(value)}`,
        );
        return `{${objValue.join(',')}}`;
    }

    if(typeof value === 'string'){
        return `"${value}"`;
    }

    return String(value);
}