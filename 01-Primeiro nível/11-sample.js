class User {
    constructor(userProfile) {
        this.name = userProfile.name;
        this.age = userProfile.age;
        this.role = userProfile.role;
        this.creationDate = userProfile.created;
        this.lastLogin = userProfile.lastLogin;
        this.isActive = userProfile.active;
        this.totalLoginAttempts = userProfile.loginAttempts;
        this.currentLoginAttempts = userProfile.totalLoginAttemptsNumber;
    }

    isActive() {
        if (this.isActive) {
            console.log("Ativo");
        } else {
            console.log("Inativo");
        }
    }

    isAdmin() {
        if (this.isAdmin === "admin") {
            console.log("Admin pode acessar todas as áreas.");
        } else {
            console.log("Convidado tem acesso limitado.");
        }
    }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function numberOfAdmins(users) {
    let contador = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].role === "admin") {
            contador++;
        }
    }
    return contador;
}


function checkLoginAttemptNumber(user, maximumLoginAttempts) {
    if (user.currentLoginAttempts > maximumLoginAttempts) {
        console.log("Tentativas de login excessivas.");
    } else {
        console.log("Tentativas de login sob controle.");
    }
}

function mostRecentlyLoggedIn(usuario1, usuario2) {
    if (usuario1.lastLogin > usuario2.lastLogin) {
        return `${usuario1.name} logou mais recentemente.`;
    } else {
        return `${usuario2.name} logou mais recentemente.`;
    }
}

function recentlyCreated(user) {
    const now = new Date();
    const maxTime = 31536000000;
    if (now - user.creationDate < maxTime) {
        console.log("Usuário criado recentemente.");
    } else {
        console.log("Usuário antigo.");
    }
}

const yearCreated1 = 2023;
const monthCreated1 = 1;
const dayCreated1 = 15;
const yearLastLogin1 = 2024;
const monthLastLogin1 = 8;
const dayLastLogin1 = 1;

const userProfile1 = {
    name: "Carlos",
    age: 25,
    role: "admin",
    creationDate: new Date(yearCreated1, monthCreated1, dayCreated1),
    lastLogin: new Date(yearLastLogin1, monthLastLogin1, dayLastLogin1),
    active: true,
    totalLoginAttempts: 100,
    currentLoginAttempts: 2
};

const yearCreated2 = 2020;
const monthCreated2 = 4;
const dayCreated2 = 22;
const yearLastLogin2 = 2024;
const monthLastLogin2 = 7;
const dayLastLogin2 = 31;

const userProfile2 = {
    name: "Ana",
    age: 30,
    role: "guest",
    creationDate: new Date(yearCreated2, monthCreated2, dayCreated2),
    lastLogin: new Date(yearLastLogin2, monthLastLogin2, dayLastLogin2),
    active: true,
    totalLoginAttempts: 50,
    currentLoginAttempts: 3
};

const yearCreated3 = 2022;
const monthCreated3 = 10;
const dayCreated3 = 5;
const yearLastLogin3 = 2024;
const monthLastLogin3 = 6;
const dayLastLogin3 = 10;

const userProfile3 = {
    name: "José",
    age: 29,
    role: "admin",
    creationDate: new Date(yearCreated3, monthCreated3, dayCreated3),
    lastLogin: new Date(yearLastLogin3, monthLastLogin3, dayLastLogin3),
    active: false,
    totalLoginAttempts: 200,
    currentLoginAttempts: 5
};


const yearCreated4 = 2021;
const monthCreated4 = 2;
const dayCreated4 = 10;
const yearLastLogin4 = 2024;
const monthLastLogin4 = 12;
const dayLastLogin4 = 25;

const userProfile4 = {
    name: "Maria",
    age: 35,
    role: "guest",
    creationDate: new Date(yearCreated4, monthCreated4, dayCreated4),
    lastLogin: new Date(yearLastLogin4, monthLastLogin4, dayLastLogin4),
    active: false,
    totalLoginAttempts: 80,
    currentLoginAttempts: 7
};

const users = [new User(userProfile1), new User(userProfile2), new User(userProfile3), new User(userProfile4)];

console.log(`Usuários admin: ${numberOfAdmins(users)}`);
const userNumber2 = 2;
const maximumLoginAttempts = 4;
checkLoginAttemptNumber(users[userNumber2], maximumLoginAttempts);
const userNumber0 = 0;
const userNumber3 = 3;
console.log(mostRecentlyLoggedIn(users[userNumber0], users[userNumber3]));

recentlyCreated(users[userNumber3]);

