type User = {
  username: string;
  password: string;
};

type Guest = {
  sessionId: string;
};

type Admin = {
  role: "admin";
  username: string;
  password: string;
};

type ExternalUser = {
  oauthToken: string;
};

function isUser(entity: unknown): entity is User {
  return (
    typeof entity === "object" &&
    entity !== null &&
    "username" in entity &&
    typeof (entity as User).username === "string" &&
    "password" in entity &&
    typeof (entity as User).password === "string"
  );
}

function isGuest(entity: unknown): entity is Guest {
  return (
    typeof entity === "object" &&
    entity !== null &&
    "sessionId" in entity &&
    typeof (entity as Guest).sessionId === "string"
  );
}

function isAdmin(entity: unknown): entity is Admin {
  return (
    typeof entity === "object" &&
    entity !== null &&
    "role" in entity &&
    (entity as Admin).role === "admin" &&
    "username" in entity &&
    typeof (entity as Admin).username === "string" &&
    "password" in entity &&
    typeof (entity as Admin).password === "string"
  );
}

function isExternalUser(entity: unknown): entity is ExternalUser {
  return (
    typeof entity === "object" &&
    entity !== null &&
    "oauthToken" in entity &&
    typeof (entity as ExternalUser).oauthToken === "string"
  );
}

function login(entity: User | Guest | Admin | ExternalUser): void {
  if (isUser(entity)) {
    console.log(`User ${entity.username} is logging in with a password.`);
  } else if (isGuest(entity)) {
    console.log(`Guest is logging in with session ID: ${entity.sessionId}.`);
  } else if (isAdmin(entity)) {
    console.log(`Admin ${entity.username} is logging in with administrator privileges.`);
  } else if (isExternalUser(entity)) {
    console.log(`External user is logging in with OAuth token: ${entity.oauthToken}.`);
  } else {
    console.log("Unknown entity type.");
  }
}

login({ username: "john_doe", password: "1234" });
login({ sessionId: "abcd1234" });
login({ role: "admin", username: "admin_user", password: "securepass" });
login({ oauthToken: "oauth_9876" });