"use strict";
function isUser(entity) {
    return (typeof entity === "object" &&
        entity !== null &&
        "username" in entity &&
        typeof entity.username === "string" &&
        "password" in entity &&
        typeof entity.password === "string");
}
function isGuest(entity) {
    return (typeof entity === "object" &&
        entity !== null &&
        "sessionId" in entity &&
        typeof entity.sessionId === "string");
}
function isAdmin(entity) {
    return (typeof entity === "object" &&
        entity !== null &&
        "role" in entity &&
        entity.role === "admin" &&
        "username" in entity &&
        typeof entity.username === "string" &&
        "password" in entity &&
        typeof entity.password === "string");
}
function isExternalUser(entity) {
    return (typeof entity === "object" &&
        entity !== null &&
        "oauthToken" in entity &&
        typeof entity.oauthToken === "string");
}
function login(entity) {
    if (isUser(entity)) {
        console.log(`User ${entity.username} is logging in with a password.`);
    }
    else if (isGuest(entity)) {
        console.log(`Guest is logging in with session ID: ${entity.sessionId}.`);
    }
    else if (isAdmin(entity)) {
        console.log(`Admin ${entity.username} is logging in with administrator privileges.`);
    }
    else if (isExternalUser(entity)) {
        console.log(`External user is logging in with OAuth token: ${entity.oauthToken}.`);
    }
    else {
        console.log("Unknown entity type.");
    }
}
login({ username: "john_doe", password: "1234" });
login({ sessionId: "abcd1234" });
login({ role: "admin", username: "admin_user", password: "securepass" });
login({ oauthToken: "oauth_9876" });
