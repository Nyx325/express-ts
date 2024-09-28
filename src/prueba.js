// En javascript para representar
// la ausencia de valor podemos
// o valor
var User = /** @class */ (function () {
    function User(nombre, passwd) {
        this.nombre = nombre;
        this._passwd = passwd;
    }
    Object.defineProperty(User.prototype, "passwd", {
        set: function (pwd) {
            this._passwd = pwd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "biography", {
        get: function () {
            return this._biography;
        },
        set: function (biography) {
            this._biography = biography;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("A", 2);
user.biography = "Un usuario"; // Uso del setter
console.log(user.biography); // Uso del getter
user.passwd = "hola1234";
console.log(user.passwd);
var contenedor = {
    capacidad: 100,
    uso: 20,
    recursos: [],
    guardar: function (obj) {
        if (this.uso < this.capacidad) {
            this.recursos.push(obj);
            this.uso++;
            return true;
        }
        return false;
    },
    recuperar: function (index) {
        return this.recursos[index];
    },
    guardarMuchos: function (objs) {
        var obj;
        for (obj in objs) {
            this.guardar(obj);
        }
    },
};
console.log(contenedor);
