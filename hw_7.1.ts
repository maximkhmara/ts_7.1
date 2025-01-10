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

function isUser(entity: any): entity is User {
  return (entity as User).username !== undefined && (entity as User).password !== undefined;
}

function isGuest(entity: any): entity is Guest {
  return (entity as Guest).sessionId !== undefined;
}

function isAdmin(entity: any): entity is Admin {
  return (
    (entity as Admin).role === "admin" &&
    (entity as Admin).username !== undefined &&
    (entity as Admin).password !== undefined
  );
}

function isExternalUser(entity: any): entity is ExternalUser {
  return (entity as ExternalUser).oauthToken !== undefined;
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