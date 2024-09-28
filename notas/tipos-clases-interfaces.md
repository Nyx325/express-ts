# Tipos, clases e interfaces

En TypeScript hay varias formas de
crear tipos específicos, es decir
crear moldes de tipos u objetos

## Tipos

En TypeScript, la palabra reservada `type`
se utiliza para crear tipos personalizados.

Estos permiten definir formas específicas
para objetos, combinaciones de tipos, o
alias para tipos complejos, y proporcionan
una forma más flexible y controlada de
trabajar con el tipado estático que
TypeScript agrega a JavaScript.

Uso de `type`

```typescript
type Persona = {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
};

let juan: Persona = {
  nombre: "Juan",
  edad: 30,
  esEstudiante: false,
};
```

## Clases

Permiten representar una entidad con acciones,
tiene modifcadores de acceso `public` y `private`
como en otros lenguajes, pero agregan `readonly`
que funciona como private pero impidiendo tambien
modificar el valor dentro de la clase, haciendo
que el valor de este dato sólo sea posible
establecerlo en el constructor.

Puedes definir que un atributo tenga dos o más
posibles tipos mediante el uso de `|`. Esto no
es exclusivo de clases, es una funcion general
del tipado de TypeScript, se puede usar en variables
y retornos de funciones.

Lo más común es usarlo para que un dato pueda
ser o de un tipo o `undefined` o `null`.

Puedes definir `getters` y `setters` usando
la palabra `get` o `set` a funciones dentro
de la clase, pero estas no pueden llamarse
igual al atributo, la convención en JS y TS
suele hacer que el nombre de los atributos
privador inicie con un `_`.

```typescript
class User {
  public readonly nombre: string;
  private _passwd: string | number;
  private _biography: string | undefined;

  constructor(nombre: string, passwd: string | number) {
    this.nombre = nombre;
    this._passwd = passwd;
  }

  public set passwd(pwd: string) {
    this.passwd = pwd;
  }

  public set biography(biography: string) {
    this.biography = biography;
  }

  public get biography(): string | undefined {
    return this._biography;
  }
}
```

Uso

```typescript
const user: User = new User("A", 2);
user.biography = "Un usuario"; // Uso del setter
console.log(user.biography); // Uso del getter
user.passwd = "hola1234";

// Puede llegar a no dar error este getter
// pero nunca devolverá el valor de la contraseña
console.log(user.passwd);
```

## Interfaz

Una interfaz permite define la estructura
de un objeto con métodos abstractos, es
decir, métodos que tienen un nombre, entrada
y salida pero no tienen una implementación
en su interior

```typescript
interface Almacenador {
  guardar(obj: object): boolean;
  recuperar(index: number): object;
  guardarMuchos(objs: object[]): void;
}
```

A diferencia de en lenguajes como Java, aquí
si podemos definir atributos e incluso crear
objetos de esta interfaz sin necesidad de
una clase que lo implemente

```typescript
interface Almacenador {
  capacidad: 100;
  uso: 20;
  recursos: [];
  guardar(obj: object): boolean;
  recuperar(index: number): object;
  guardarMuchos(objs: object[]): void;
}
```

¿Cómo se crea un Cliente con esa interfaz?

```typescript
const cliente: Client = {
  clientId: 1,
  clientName: "Juan",
  clientLastName: "Hernández",
  clientBirthDay: new Date(2024, 5, 1),
};

// Si ya tenemos variables con el mismo
// nombre del atributo es más facil

// Forma sencilla de crear variables con
// los atributos de un objeto tanto en JS
// como en TS, util en ciertos casos, el
// nombre de las variables puede variar
const { clientId, clientName, clientLastName, clientBirthDay } = cliente;
//const { a, b, c, d } = cliente; // También funcionaría

// Forma 2 de crear un cliente usando variables con
// el nombre del atributo
const cliente2: Client = {
  clientId,
  clientName,
  clientLastName,
  clientBirthDay,
};
```

Lo mostrado al último también funciona con
tipos, y en general es una funcion de JS

¿Y si mi interfaz tiene métodos?

```typescript
interface Algo {
  algo(): number;
}

const algo: Algo = {
  algo(): number {
    return 1;
  },
};
```

Aunque para eso, mejor haz una clase xd

## Clase abstracta

Hijo perdido de una interfaz y una clase,
permite todo lo de una clase pero admitiendo
métodos abstractos y a pesar de poder definir
constructor no puede instanciarse

```typescript
abstract class Algo {
  private dato: number;

  constructor(dato: number) {
    this.dato = dato;
  }

  algo() {
    console.log(this.dato);
  }

  abstract algoAbstracto(dato: number): string;
}
```

## Utility Types

Los `utility types` o `tipos utilitarios` son
operadores que permiten modificar o transformar
tipos existenes sin la necesidad de definir un
tipo, clase o interfaz nueva

```typescript
// Definir un objeto que tenga 3 atributos
type Persona = {
  nombre: string;
  edad: number;
  direccion: string;
};
```

### Pick

Selecciona un subconjunto de propiedades de un tipo.

```typescript
type Persona = {
  nombre: string;
  edad: number;
  direccion: string;
};

// Definir un nuevo tipo que sólo tenga nombre y edad
type PersonaBasica = Pick<Persona, "nombre" | "edad">;
```

### Partial

En javascript para definir la ausencia de valor
o `valores opcionales` de puede usar `null` y
`undefined`.

```typescript
interface Usuario {
  username: string;
  password: string;
  fullName: string | null;
  biography: string | undefined;
}

const usr: Usuario = {
  username: "rubenor", // Si o si deben tener valor
  password: "1234",
  fullName: null,
  biography: undefined,
};
```

Con `Partial` definimos que todos los campos de
un tipo como opcionales o que pueden ser undefined

```typescript
type OptionalUsuario = Partial<Usuario>;

const usr: OptionalUsuario = {
  username: undefined, // Si o si deben tener valor
  password: undefined,
  fullName: null,
  biography: undefined,
};
```

### Required

Vuelve todos los valores obligatorios

```typescript
class OptionalUsr {
  usrname: string | undefined;
  pwd: string | undefined;
}

type Usr = Required<OptionalUsr>;
```

### Readonly

Le agrega a todos los atributos el modificador
de `readonly`

```typescript
type PersonaSoloLectura = Readonly<Usr>;
```

### Record

Crea un tipo de conjunto clave - valor dados
dos tipos

```typescript
type Diccionario = Record<string, number>;
```

### Exclude

Excluye de un tipo aquellos valores que sean
compatibles con un conjunto de tipos.

```typescript
type Tipos = "a" | "b" | "c";
type ExcluirB = Exclude<Tipos, "b">; // Resultado: 'a' | 'c'
```

### NoNullable

Elimina `null` y `undefined` de un tipo

```typescript
type NoNull = NonNullable<string | null | undefined>; // Resultado: string
```

Faltan otros 2 operadores pero luego los pongo
