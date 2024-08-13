interface userType {
  email: string;
  password: string;
  //   cpw:string
}

interface authServiseType {
  register: (user: userType) => Promise<any>;
  login: (user: userType) => Promise<any>;
  //   changePassword: (user: userType) => Promise<any>;
  changePassword: (
    currentpw: string,
    newpw: string,
    cnpw: string,
    email: string
  ) => Promise<any>;
}

function authServise(): authServiseType {
  return {
    register: async (user) => {
      const body = JSON.stringify(user);
      const result = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const res = await result.json();
      return res;
    },
    login: async (user) => {
      const body = JSON.stringify(user);
      const result = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const res = await result.json();
      return res;
    },
    changePassword: async (currentpw, newpw, cnpw, email) => {
      let req = { currentpw, newpw, cnpw, email };
      const result = await fetch("/api/changepassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      });

      const res = await result.json();
      return res;
    },
  };
}

export { authServise };
