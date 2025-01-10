"use strict";
function isUser(entity) {
    return entity.username !== undefined && entity.password !== undefined;
}
function isGuest(entity) {
    return entity.sessionId !== undefined;
}
function isAdmin(entity) {
    return (entity.role === "admin" &&
        entity.username !== undefined &&
        entity.password !== undefined);
}
function isExternalUser(entity) {
    return entity.oauthToken !== undefined;
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
